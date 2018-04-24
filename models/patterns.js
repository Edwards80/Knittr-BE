const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patternSchema = new Schema({
  title: String,
  difficulty: String,
  style: String,
  author: String,
  description: String,
  created_at: Number,
  pattern: Object,
  preview: {
    type: String,
    default: 'https://www.craftsy.com/blog/wp-content/uploads/2013/07/KnittingNeedles.jpg'
  }
});

module.exports = mongoose.model('pattern', patternSchema);