const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  email: String,
  score: Number,
});

module.exports = mongoose.model('player', playerSchema);
