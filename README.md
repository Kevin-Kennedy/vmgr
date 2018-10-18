# vmgr

Work in progress while I'm learning.

## Table of contents

 - [Logging](#logging)
 - [Tests](#run-tests)

## Logging

[Winston](https://github.com/winstonjs/winston) is the log utility for now.

## Run Tests

The following magic will happen when you run ```npm test```.

 - Lint using ```esint``` along with some plugins based on [these recommendations](https://github.com/i0natan/nodebestpractices#3-code-style-practices).
   - Had to work around interesting errors with overrides for test code.
 - Unit tests run using ```mocha``` with```chai``` as an assertion library.
 - Test coverage report from ```nyc``` prints at the end.
