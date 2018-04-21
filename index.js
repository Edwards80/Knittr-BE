const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.route');

app.use(bodyParser.json());

app.use(cors());

app.use('/api', apiRouter);

module.exports = app;
