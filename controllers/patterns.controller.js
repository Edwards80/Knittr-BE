const patterns = require('../models/patterns');

module.exports = {
  fetchAll(req, res) {
    patterns.find()
      .then(patterns => {
        res.send(patterns);
      });
  },

  fetchPattern(req, res) {
    const patternId = req.params.pattern_id;
    patterns.findById(patternId)
      .then(pattern => {
        res.send(pattern);
      });
  },

  updateStitch(req, res) {
    res.send();
  }

};
