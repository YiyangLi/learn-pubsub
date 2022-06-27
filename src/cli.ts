#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import Server from './server';
import Consumer from './consumer';
import logger from './utils/logger';
import dotenv from 'dotenv';

import axios from 'axios';
import {randomUUID} from 'crypto';
dotenv.config();
const defaultPort: number = (process.env.PORT as unknown as number) || 3000;

yargs(hideBin(process.argv))
  .command(
    'start',
    'start a pubsub API server',
    () => {},
    argv => {
      logger.debug(`start pubsub is running on :${argv.port}`);
      Server(argv.port as number);
    }
  )
  .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run with debug logging',
    default: process.env.LOG_LEVEL === 'debug',
  })
  .option('port', {
    alias: 'p',
    type: 'number',
    description: `start the server at a port different than the one in .env: ${defaultPort}`,
    default: defaultPort,
  })
  .command(
    'publish <topic> [message]',
    'publish a message to the topic',
    yargs => {
      return yargs
        .positional('message', {
          describe: 'the msg you want to send to the topic, use double quotes',
          type: 'string',
          default: randomUUID(),
        })
        .positional('topic', {
          describe: 'the topic you want send message to, use double quotes',
          type: 'string',
          default: process.env.TOPIC || 'foo',
        });
    },
    async argv => {
      logger.debug(
        `you want to publish "${argv.message}" to topic "${argv.topic}"`
      );
      const data = JSON.stringify({
        message: argv.message,
        topic: argv.topic,
      });
      const port = argv.port || defaultPort;
      const config = {
        method: 'post',
        url: `http://localhost:${port}/publish`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      await axios(config)
        .then(response => {
          logger.info(`status: ${response.status}; body: ${data}`);
        })
        .catch(error => {
          logger.error(error);
        });
    }
  )
  .command(
    'consume <topic> [slow]',
    'consume messages on a topic',
    yargs => {
      return yargs
        .positional('topic', {
          describe: 'the topic you want send message to, use double quotes',
          type: 'string',
          default: process.env.TOPIC || 'foo',
        })
        .positional('slow', {
          describe: 'is it a slow client that takes time to process task?',
          type: 'boolean',
          default: false,
        });
    },
    async argv => {
      logger.debug(
        `create a${argv.slow ? ' slow ' : ' '}client to process topic "${
          argv.topic
        }"`
      );
      Consumer(argv.topic, argv.slow, argv.port);
    }
  )
  .parse();
