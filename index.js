const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.route');

app.use('/static', express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json());

app.use('/api', apiRouter);

module.exports = app;