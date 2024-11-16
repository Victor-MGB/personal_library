const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  publicationDate: { type: Date },
  isbn: { type: String, unique: true },
  status: { type: String, default: 'Available' }
});

module.exports = mongoose.model('Book', bookSchema);
