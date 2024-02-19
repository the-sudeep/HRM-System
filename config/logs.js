// // save the logs to the database or on your local machine ,
// // easier to track the errors....

const winston = require("winston");
const winstonDB = require("winston-mongodb");
require('dotenv').config();


module.exports = function(){
  // transporting to console 
  winston.add(new winston.transports.Console({colorize: true, format:winston.format.simple()}));

  //transporting to file (logger.log)
  winston.add(new winston.transports.File({filename: 'logger.log', level : 'error'}));

  //transporting to mongoDB
  winston.add(new winstonDB.MongoDB({
    level: 'error',
    db: process.env.MONGODB_URL,
    options: { useUnifiedTopology: true },
    collection: 'logs'
  }));
}