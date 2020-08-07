const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'allbirds'
});


connection.connect(err => {
  if (err) {
    return console.error('----- CONNECTION TO MYSQL SERVER FAILS ----- \n', err.message);
  }
  console.log('----- CONNECTION TO MYSQL SERVER SUCCESS ----- \n');
});

module.exports = connection;