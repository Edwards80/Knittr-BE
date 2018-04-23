const express = require('express');
const patternsController = require('../controllers/patterns.controller');

const router = express.Router();

router.get('/', patternsController.fetchAll);

router.put('/:pattern_id', patternsController.updatePattern);

router.use('/:pattern_id', patternsController.fetchPattern);

router.post('/', patternsController.submitPattern)

module.exports = router;