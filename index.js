const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.route');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => { res.send('OK') });

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  if (err.code === 404) { res.status(err.code).send('404 - Item not found'); }  
  if (err.code === 500) { res.status(err.code).send('500 - Internal Server error'); }
  else (res.status(err.code).send(err))
});

module.exports = app;
