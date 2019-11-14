'use strict';
require('should');
const mylib = require('../promise');

// 注意：使用should测试Promise对象时，请一定要return，一定要return，一定要return，否则断言将无效
describe('Promise Test', () => {
  it('Welcome to Tmall', () => {
    return mylib('Tmall').should.be.fulfilledWith('Hello Tmall');
  });
});