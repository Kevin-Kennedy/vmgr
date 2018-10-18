'use strict';


const winston = require('winston');
const console = new winston.transports.Console();
const logger = winston.createLogger({
    transports: [
        console
    ]
});


const message = "Hello";

logger.info(message);
