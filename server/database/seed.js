const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('----- CONNECTING TO MYSQL SERVER FAILS ----- \n');
  } else {
    console.log('----- CONNECTING TO MYSQL SERVER SUCCESS ----- \n');
    for (let i = 1; i < 101; i++) {
      let name = faker.commerce.productName();
      let queryStr = `INSERT INTO products (name) VALUES ("${name}");`;
      connection.query(queryStr, (err) => {
        if (err) {
          console.log('----- INSERTING INTO PRODUCT TABLE FAILS ----- \n', err);
        } else {
          for (let j = 1; j < 11; j++) {
            let customerName = faker.name.findName();
            let date = '' + faker.date.between('2019-01-01', '2020-08-01');
            let createdAt = date.slice(4, 16);
            let rating = faker.random.number(5);
            let commentTitle = 'From ' + faker.address.state();
            let comment = faker.lorem.sentences();
            let queryStr = `INSERT INTO reviews (product_id, customerName, createdAt, rating, commentTitle, comment) VALUES ("${i}", "${customerName}","${createdAt}","${rating}","${commentTitle}","${comment}")`;
            connection.query(queryStr, (err) => {
              if (err) {
                console.log('----- INSERTING INTO REVIEWS TABLE FAILS ----- \n', err);
              }
            });
          }
        }
      });
    }
    console.log ('----- SEEDING DATABASE COMPLETE ----- \n');
  }
});