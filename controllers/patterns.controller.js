const Pattern = require('../models/patterns');

module.exports = {
  fetchAll(req, res) {
    Pattern.find()
      .then(patterns => {
        res.send(patterns);
      });
  },

  fetchPattern(req, res) {
    const patternId = req.params.pattern_id;
    Pattern.findById(patternId)
      .then(pattern => {
        res.send(pattern);
      });
  },

  updateStitch(req, res) {
    res.send();
  },

  submitPattern(req, res) {
    const pattern = new Pattern({
      title: req.body.title,
      difficulty: req.body.difficulty,
      style: req.body.style,
      author: req.body.author,
      created_at: new Date().getTime(),
      description: req.body.description,
      pattern: req.body.pattern
    }).save().then(() => {
      res.status(200).send(pattern);
    });
  }

};
