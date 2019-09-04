const LalaLime = require('./index.js');

const getProducts = () => {
  return LalaLime.find();
}

module.exports = getProducts;