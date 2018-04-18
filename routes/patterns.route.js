const express = require('express');
const patternsController = require('../controllers/patterns.controller');

const router = express.Router();

router.get('/', patternsController.fetchAll);

router.use('/:pattern_id', patternsController.fetchPattern);


module.exports = router;