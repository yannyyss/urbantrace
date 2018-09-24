const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DMSchema = new Schema({
  title: String,
  message: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const DM = mongoose.model('DM', DMSchema);
module.exports = DM;