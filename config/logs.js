// save the logs to the database or on your local machine ,
// easier to track the errors....

const winston = require('winston');
const winstonDB = require('winston-mongodb');
require('express-async-errors');


winston.add(new winston.transports.Console({colorize: true, format:winston.format.simple()}));
winston.add(new winston.transports.File({filename: 'logger.log'}));
winston.add(new winstonDB.MongoDB({
    level: 'error',
    db: 'mongodb://localhost:27017/hrm-system',
    options: { useUnifiedTopology: true },
    collection: 'logs',
}));
