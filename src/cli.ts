#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import Server from './server';
import logger from './utils/logger';
import dotenv from 'dotenv';

import axios from 'axios';
import {randomUUID} from 'crypto';
dotenv.config();
const defaultPort: number = (process.env.PORT as unknown as number) || 3000;
yargs(hideBin(process.argv))
  .command(
    'start <port>',
    'start a pubsub API server at port',
    yargs => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        type: 'number',
        default: defaultPort,
      });
    },
    argv => {
      if (argv.debug) {
        logger.debug(`start pubsub is running on :${argv.port}`);
      }
      Server(argv.port as number);
    }
  )
  .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run with debug logging',
    default: process.env.LOG_LEVEL === 'debug',
  })
  .parse();

yargs(hideBin(process.argv))
  .command(
    'publish [message] <topic>',
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
      logger.info(argv.message);
      if (argv.debug) {
        logger.debug(`you want to publish ${argv.message} to ${argv.topic}`);
      }
      const data = JSON.stringify({
        message: '123',
        topic: 'foo',
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
      console.log('123');
      await axios(config)
        .then(response => {
          logger.info(`status: ${response.status}`);
        })
        .catch(error => {
          logger.error(error);
        });
    }
  )
  .option('port', {
    alias: 'p',
    type: 'number',
    description: `publish to the server if the port is different than the one in .env: ${defaultPort}`,
    default: process.env.LOG_LEVEL === 'debug',
  })
  .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run with debug logging',
    default: process.env.LOG_LEVEL === 'debug',
  })
  .parse();
