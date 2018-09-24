const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  location: { type: { String, }, coordinates: [Number] },
  address: String,
  sports: [{
    type:String, 
    enum:['SlackLine', 'Parkour', 'FreeRunning', 'BMX', 'AgressiveRolling', 'Skate']
  }],
  creator: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
