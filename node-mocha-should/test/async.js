'use strict';
require('should');
const mylib = require('../async');

describe('async Test', () => {
    it('Welcome to Tmall', done => {
        mylib('Tmall', rst => {
            rst.should.be.eql('Hello Tmall');
            done();
        });
    });
});