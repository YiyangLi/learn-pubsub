import logger from '../utils/logger';

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

  public static subscribe(topic: string, port: number): void {
    this.getInstance().getTopic(topic).subscribe(port);
  }

  private publishToTopic(topic: string, message: string): number {
    return this.getTopic(topic).push(message);
  }

  private getTopic(topic: string): PubSubTopic {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, new PubSubTopic());
    }
    return this.topics.get(topic) as PubSubTopic;
  }
}

class PubSubTopic {
  public subscriptions: number[];
  public messages: string[];

  constructor() {
    this.subscriptions = [];
    this.messages = [];
  }

  public subscribe(port: number) {
    this.subscriptions.push(port);
  }

  public push(message: string): number {
    this.messages.push(message);
    this.subscriptions.forEach(subscription => {
      logger.debug(`sending ${message} to ${subscription}`);
    });
    return this.messages.length;
  }
}
