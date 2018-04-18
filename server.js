const DB_URL = require('./config/index.js');
const app = require('./index');
const port = 5000;
const mongoose = require('mongoose');

mongoose.Promise = Promise;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${port}`);
});

mongoose.connect(DB_URL, (err) => {
  if (err) console.log(err);
  else console.log(`Connected to ${DB_URL}`);
});
