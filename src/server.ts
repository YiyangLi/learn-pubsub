import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './utils/logger';
import PubSubPush from './pubsubs/pubsub.push';

export default function Server(port: number) {
  const pubsubApp = express();
  PubSubPush.initIfNot();
  pubsubApp.use(bodyParser.json());
  pubsubApp.use(cors());
  pubsubApp.get('/favicon.ico', (req, res) => res.status(204));

  pubsubApp.post('/publish', (req: express.Request, res: express.Response) => {
    const message = req.body.message as unknown as string;
    const topic = req.body.topic as unknown as string;
    const size = PubSubPush.publish(topic, message);
    logger.info(`topic - ${topic} contains ${size} msg`);
    res.sendStatus(201);
  });

  pubsubApp.listen(port, () => {
    logger.debug(`A Pubsub Server is started at localhost:${port}`);
  });
}
