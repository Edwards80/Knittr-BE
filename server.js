if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';
require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});

const app = require('./index');
const port = process.env.port || 5000;
const mongoose = require('mongoose');

mongoose.Promise = Promise;

app.listen(process.env.PORT || 5000, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${port}`);
});

mongoose.connect(process.env.DB_URI, (err) => {
  if (err) console.log(err);
  else console.log(`Connected to ${process.env.DB_URI}`);
});
