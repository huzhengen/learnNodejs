'use strict';
require('should');
const mylib = require('../promise2');

// 注意：使用should测试Promise对象时，请一定要return，一定要return，一定要return，否则断言将无效
describe('Promise2 Test', () => {
    it('Welcome to Tmall', () => {
        return mylib('Tmall').should.be.fulfilledWith('Welcome to Tmall');
    });

    it('Hello TB', () => {
        return mylib('TB').should.be.fulfilledWith('Hello TB');
    });
});