'use strict';
module.exports = bu => new Promise(resolve => {
  if (bu === 'Tmall') return resolve(`Welcome to Tmall`);
  resolve(`Hello ${bu}`);
});