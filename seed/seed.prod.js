require('dotenv').config({
  path: './.production.env'
});

require('./seed')(process.env.DB_URI);