const test = require('./test');
const inventory = require('./inventory');
const checkout = require('./checkout');
const order = require('./order');


module.exports = []
  .concat(test, inventory, checkout, order);
