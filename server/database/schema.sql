DROP DATABASE IF EXISTS allbirds;

CREATE DATABASE allbirds;

USE allbirds;

CREATE TABLE products (
  _id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (_id)
);

CREATE TABLE reviews (
  product_id INT,
  customerName VARCHAR(30) NOT NULL,
  createdAt VARCHAR(20) NOT NULL,
  rating INT,
  commentTitle VARCHAR(20) NOT NULL,
  comment VARCHAR(450) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/database/schema.sql
 *  to create the database and the tables.*/
