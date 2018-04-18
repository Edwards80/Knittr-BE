const mongoose = require('mongoose');
mongoose.Promise = Promise;

const { Pattern } = require('../models');
const patternsData = require('./data/patterns');

// dburl dev or test
function seedDB(dbUrl) {


  return mongoose.connect(dbUrl)
    .then(() => {
      mongoose.connection.db.dropDatabase();
    })
    .then(() => {
      patternsData.map((pattern) => {
        new Pattern(pattern)
          .save();
      });
    });
}

module.exports = seedDB;
