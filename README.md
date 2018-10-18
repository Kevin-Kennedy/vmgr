# vmgr

Work in progress while I'm learning.

## Table of contents

 - [Logging](#logging)
 - [Tests](#run-tests)

## Logging

[Winston](https://github.com/winstonjs/winston) is the log utility for now.

## Run Tests

The following magic will happen when you run ```npm test```.

 - Lint using ```esint``` along with some plugins based on [these recommendations](https://github.com/i0natan/nodebestpractices#3-code-style-practices)
 - Unit tests run through ```chai```
 - Test coverage report from ```nyc```
