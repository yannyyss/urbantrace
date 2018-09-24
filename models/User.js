const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  image: String,
  photos:  [{
    photo: String
  }],
  videos: [{
    video: String
  }],
  media: [{
    twitter: String,
    facebook: String,
    email: String
  }],
  places: [{
    place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place'}
  }],
  friends: [{
    friend: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }],
  events: [{
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Events'}
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
