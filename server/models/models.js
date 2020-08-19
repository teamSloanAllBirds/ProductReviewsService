const mysql = require('mysql');
const mysqlConfig = require('../database/config.js');

const connection = mysql.createConnection(mysqlConfig);

module.exports = {
  getAll: (id, callback) => {
    var queryStr = `SELECT customerName, createdAt, rating, commentTitle, comment FROM reviews WHERE product_id=${id};`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        console.log('GETALL METHOD FAILS', err);
      }
      console.log('GETALL METHOD SUCCESS');
      callback(null, results);
    });
  }
};


