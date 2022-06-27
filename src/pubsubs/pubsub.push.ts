import logger from '../utils/logger';
import _ from 'lodash';
import axios, {AxiosPromise} from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const pushSchedule: number =
  (process.env.PUSH_SCHEDULE_IN_MS as unknown as number) || 500;
export default class PubSubPush {
  private static instance: PubSubPush;
  private topics: Map<string, PubSubTopic>;

  private constructor() {
    this.topics = new Map();
  }

  public static initIfNot() {
    if (!PubSubPush.instance) {
      PubSubPush.instance = new PubSubPush();
    }
  }

  public static publish(topic: string, message: string): number {
    return this.getInstance().publishToTopic(topic, message);
  }

  private static getInstance(): PubSubPush {
    PubSubPush.initIfNot();
    return PubSubPush.instance;
  }

  public static subscribe(topic: string, port: number): number {
    return this.getInstance().getTopic(topic).subscribe(port);
  }

  private publishToTopic(topic: string, message: string): number {
    return this.getTopic(topic).push(message);
  }

  private getTopic(topic: string): PubSubTopic {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, new PubSubTopic(topic));
    }
    return this.topics.get(topic) as PubSubTopic;
  }
}

class PubSubTopic {
  public subscriptions: number[];
  public messages: string[];

  constructor(private topic: string) {
    this.subscriptions = [];
    this.messages = [];
  }

  public subscribe(port: number): number {
    this.subscriptions.push(port);
    return this.subscriptions.length;
  }

  public push(message: string): number {
    if (this.messages.length === 0) {
      logger.debug('a new message appears, start to consume');
      _.delay(() => {
        this.consume();
      }, pushSchedule);
    }
    this.messages.push(message);
    return this.messages.length;
  }

  public async consume(): Promise<void> {
    const msgLength = this.messages.length;
    const subLength = this.subscriptions.length;
    logger.info(
      `There are ${msgLength} messages and ${subLength} workers for topic ${this.topic}`
    );
    if (msgLength >= subLength) {
      logger.debug('There are more messages than consumers');
      const nextBatch = this.messages.splice(0, subLength);
      const tuples = _.zip(nextBatch, this.subscriptions);
      const unprocessed = await batchProcess(this.topic, tuples);
      if (unprocessed.length) {
        logger.debug(
          `${unprocessed.length}/${subLength} messages not processed`
        );
        this.messages.push(...unprocessed);
      }
    } else {
      logger.debug('There are more consumers than messages');
      let cursor = 0;
      let nextBatch = this.messages.splice(0, msgLength);
      let workers = this.subscriptions.slice(cursor, msgLength);
      let length = nextBatch.length;
      while (nextBatch.length && workers.length) {
        logger.debug(
          `${workers.length} workers processing ${nextBatch.length} messages`
        );
        const tuples = _.zip(nextBatch, workers);
        nextBatch = await batchProcess(this.topic, tuples);
        logger.debug(
          `${nextBatch.length}/${workers.length} messages not processed`
        );
        cursor = cursor + length;
        length = nextBatch.length;
        workers = this.subscriptions.slice(cursor, cursor + length);
      }
      this.messages.push(...nextBatch);
    }
    if (this.messages.length) {
      logger.debug(
        `contains ${this.messages.length} messaages, schedule next consume`
      );
      _.delay(() => this.consume(), pushSchedule);
    } else {
      logger.debug('no messages, stop the schedule');
    }
  }
}

async function batchProcess(
  topic: string,
  tuples: [string | undefined, number | undefined][]
): Promise<string[]> {
  const unprocessed: string[] = [];
  await Promise.allSettled(
    tuples.map(
      async ([msg, port]: [string | undefined, number | undefined]) => {
        try {
          await sendMessage(topic, msg as string, port as number);
        } catch (reason) {
          logger.error(`consumer busy or unavailable, ${reason}`);
          unprocessed.push(msg as string);
        }
      }
    )
  );
  return unprocessed;
}

function sendMessage(
  topic: string,
  message: string,
  port: number
): AxiosPromise<void> {
  const data = JSON.stringify({
    topic,
    message,
  });
  const config = {
    method: 'post',
    url: `http://localhost:${port}/work`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
}
