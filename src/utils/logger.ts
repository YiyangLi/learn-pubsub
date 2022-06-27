'use strict';

import * as winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();
const config = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    info: 'white',
  },
};

winston.addColors(config.colors);

const logger = winston.createLogger({
  levels: config.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
  level: process.env.LOG_LEVEL || 'info',
});

export default logger;
