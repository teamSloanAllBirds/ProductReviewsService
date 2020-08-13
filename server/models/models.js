const mysql = require('mysql');
const mysqlConfig = require('../database/config.js');

const connection = mysql.createConnection(mysqlConfig);

module.exports = {
  getAll: (callback) => {
    var queryStr = 'SELECT * FROM reviews';
    connection.query(queryStr, (err, results) => {
      if (err) {
        console.log('GETALL METHOD FAILS', err);
      }
      console.log('GETALL METHOD SUCCESS');
      callback(null, results);
    });
  }
};


