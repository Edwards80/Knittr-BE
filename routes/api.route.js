
const express = require('express');
const patternsRoute = require('./patterns.route');

const router = express.Router();

router.use('/patterns', patternsRoute);

router.use('/', (req, res) => {res.send('API OK')});

module.exports = router;