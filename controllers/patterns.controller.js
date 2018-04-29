const Pattern = require('../models/patterns');

module.exports = {
  fetchAll(req, res, next) {
    Pattern.find()
      .then(patterns => {
        res.send(patterns);
      })
      .catch((err) => {
        return next({err: err, code: 500})
      });
  },

  fetchPattern(req, res, next) {
    const patternId = req.params.pattern_id;
    Pattern.findById(patternId)
      .then(pattern => {
        res.send(pattern);
      })
      .catch(err => {
        return next({ err: err, code: 500 });
      });
  },

  submitPattern(req, res, next) {
    const pattern = new Pattern({
      title: req.body.title,
      difficulty: req.body.difficulty,
      style: req.body.style,
      author: req.body.author,
      created_at: new Date().getTime(),
      description: req.body.description,
      pattern: req.body.pattern
    }).save()
      .then(() => {
        res.status(200).send(pattern);
      })
      .catch(err => {
        return next({ err: err, code: 500 });
      });
  },

  updatePattern(req, res, next) {
    const patternId = req.params.pattern_id;
    Pattern.findByIdAndUpdate(patternId, { $set: { 'pattern': req.body.pattern } })
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        return next({ err: err, code: 500 });
      });;
  },

  deletePattern(req, res, next) {
    const patternId = req.params.pattern_id;
    Pattern.findByIdAndRemove(patternId)
      .then(() => {
        return res.sendStatus(200)
      })
      .catch(err => {
        return next({ err: err, code: 500 });
      });
  }
};
