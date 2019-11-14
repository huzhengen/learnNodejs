// 'use strict';
// module.exports = bu => new Promise(resolve => resolve(`Hello ${bu}`));

'use strict';
const co = require('co');
module.exports = co.wrap(function* (bu) {
  return `Hello ${bu}`;
});