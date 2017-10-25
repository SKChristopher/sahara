const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://chris:123@ds127105.mlab.com:27105/sahara', (err) => {
  if (err) return console.error(err);
  console.log('connected to mLabs remote');
});

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
