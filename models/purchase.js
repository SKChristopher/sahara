const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  creditcard: { type: Number, required: true },
  purchase: { type: Object, required: true },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;
