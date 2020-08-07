// const db = require('../database/index.js');

module.exports = {
  getAll: (callback) => {
    var queryStr = 'SELECT * FROM reviews';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  }

};