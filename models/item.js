const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const itemSchema = new Schema({
  itemNum: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String},
  price: { type: Number }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
