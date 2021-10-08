const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    max: [60, '最大60文字まで'],
  },
  description: String,
  price: Date,
  header1: String,
  header2: String,
  header3: String,
  headingText: String,
  image: String,
});

module.exports = mongoose.model('products', productSchema);