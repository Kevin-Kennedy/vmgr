'use strict';


const winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});


let message = null;

if ("test" === process.env.NODE_ENV) {
    message = "Hello";
} else {
    message = "Howdy";
}

logger.info(message);
