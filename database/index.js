const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lululemon = new Schema({
  property: String,
  type: String,
  img: [String],
  color: [String],
  title: String,
  price: String
})

const category = ['Shorts', 'Skirts', 'Pants', 'Dresses', 'Tanks', 'Sweaters', 'Jackets', 'Sweatshirts','Short Sleeves', 'Long Sleeves'];
