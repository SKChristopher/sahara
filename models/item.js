const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemNum: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
