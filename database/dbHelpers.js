const LalaLime = require('./index.js');

const getProducts = () => {
  return LalaLime.find({property:'bottom'});
}

module.exports = getProducts;