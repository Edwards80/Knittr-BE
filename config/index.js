const DB_URL = process.env.NODE_ENV !== 'test' ? 'mongodb://scott:KmlabR@ds261929.mlab.com:61929/knittr' : 'mongodb://localhost:27017/knittr_test';

module.exports = DB_URL;
