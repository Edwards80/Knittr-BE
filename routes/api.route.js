
const express = require('express');
const patternsRoute = require('./patterns.route');

const router = express.Router();

router.use('/patterns', patternsRoute)

module.exports = router