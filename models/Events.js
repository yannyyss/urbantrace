const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  name: String,
  date: Date,
  description: String,
  image: String,
  asistants: [{
    asistant: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
  }],
  location: {type: {String, }, coordinates:[Number]}, 
  address: String,
  creator: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Events = mongoose.model('Events', eventsSchema);
module.exports = Events;