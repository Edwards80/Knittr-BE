const DB_URL = process.env.NODE_ENV !== 'test' ? 'mongodb://localhost:27017/knittr' : 'mongodb://localhost:27017/knittr_test';

module.exports = DB_URL;