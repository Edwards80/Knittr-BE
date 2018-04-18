const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.route');

app.use(bodyParser.json());

app.use('/api', apiRouter);

module.exports = app;