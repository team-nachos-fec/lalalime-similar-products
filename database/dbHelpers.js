const LalaLime = require('mongoose');

const getProducts = () => {
  return LalaLime.find();
}

module.exports = getProducts;