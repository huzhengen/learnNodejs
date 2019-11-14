'use strict'

require('should') // 引入了断言库Should.js

const mylib = require('../index');

// describe干的事情就是给测试用例分组
describe('index Test', () => {
    // it()函数定义了一个测试用例
    it('should get "Hello Tmall"', () => {
        mylib().should.be.eql('Hello Tmall');
    });
});