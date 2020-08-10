const db = require('../database/seed.js');

module.exports = {
  getAll: (callback) => {
    var queryStr = 'SELECT * FROM reviews';
    db.connection.query(queryStr, (err, results) => {
      if (err) {
        return callback(err, results);
      }
      callback(err, results);
    });
  }

};