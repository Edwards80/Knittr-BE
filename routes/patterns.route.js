const express = require('express');
const patternsController = require('../controllers/patterns.controller');

const router = express.Router();

router.get('/', patternsController.fetchAll);

router.use('/:pattern_id', patternsController.fetchPattern);

router.put('/:pattern_id/:stitch', patternsController.updateStitch);

module.exports = router;