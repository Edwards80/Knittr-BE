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
});

module.exports = mongoose.model('pattern', patternSchema);