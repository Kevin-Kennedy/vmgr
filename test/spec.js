'use strict';

const { expect } = require('chai');

const app = require('../index.js');


describe('My Application' + app, () => {
    it('Does nothing', () => {
        expect(1).equals(1);
    });
});
