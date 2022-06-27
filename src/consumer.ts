import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

import logger from './utils/logger';
import {AddressInfo} from 'net';
import dotenv from 'dotenv';
import _ from 'lodash';

dotenv.config();
const delay = parseInt(process.env.DELAY_IN_MS || '') || 1000;

export default function Consumer(
  topic: string,
  isSlow: boolean,
  serverPort: number
) {
  const client = express();
  const extraWaiting = isSlow ? delay : 0;
  let available = false;
  client.use(bodyParser.json());
  client.use(cors());
  client.get('/favicon.ico', (req, res) => res.status(204));

  client.post('/work', async (req: express.Request, res: express.Response) => {
    if (!available) {
      res.status(503).send('Error: Service Unavailable');
      return;
    }
    if (req?.body?.topic !== topic) {
      res.status(400).send('Error: Mismatch topic');
      return;
    }
    available = false;
    const randomWait: number = Math.floor(Math.random() * 500) + extraWaiting;
    res.sendStatus(200);
    _.delay(async () => {
      logger.info(
        `[${topic}]: printing ${req.body.message}, which takes ${randomWait} ms`
      );
      available = true;
    }, randomWait);
    return;
  });

  const server = client.listen(0, async () => {
    if (server !== null && instanceOfAddressInfo(server.address())) {
      const consumerPort = (server.address() as AddressInfo).port;
      logger.info(
        `A ${
          isSlow ? 'slow ' : ''
        }client is started at localhost:${consumerPort}, consuming topic "${topic}"`
      );
      try {
        await subscribe(topic, consumerPort, serverPort);
        available = true;
      } catch {
        logger.error('unable to subscribe, close the client');
        server.close();
      }
    } else {
      server.close();
    }
  });
}

async function subscribe(
  topic: string,
  consumerPort: number,
  serverPort: number
): Promise<any> {
  const data = JSON.stringify({
    port: consumerPort,
    topic,
  });

  const config = {
    method: 'post',
    url: `http://localhost:${serverPort}/subscribe`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config);
}

function instanceOfAddressInfo(
  address: string | AddressInfo | null | undefined
): address is AddressInfo {
  return (
    address !== null &&
    address !== undefined &&
    typeof address !== 'string' &&
    'port' in address
  );
}
