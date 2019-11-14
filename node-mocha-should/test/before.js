'use strict';
require('should');
const mylib = require('../before');
let bu = 'none';

// before会在每个分组的所有测试用例运行前，相对的after则会在所有测试用例运行后执行
describe('before Test', () => {

  describe('Welcome to Tmall', () => {
    before(() => bu = 'Tmall');
    after(() => bu = 'none');
    it('should get "Hello Tmall"', () => {
      mylib(bu).should.be.eql('Hello Tmall');
    });
  });

  describe('Welcome to Taobao', () => {
    before(() => bu = 'Taobao');
    after(() => bu = 'none');
    it('should get "Hello Taobao"', () => {
      mylib(bu).should.be.eql('Hello Taobao');
    });
  });

});