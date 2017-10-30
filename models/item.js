const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://chris:123@ds127105.mlab.com:27105/sahara', (err) => {
  if (err) return console.error(err);
  console.log('connected to mLabs remote');
});

const itemSchema = new Schema({
  itemNum: { type: Number, required: true, unique: true },
  //image
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;