const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  
});

module.exports = Movie = mongoose.model('movies', MovieSchema);
