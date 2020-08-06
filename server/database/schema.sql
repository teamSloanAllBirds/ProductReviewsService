DROP DATABASE IF EXISTS allbirds;

CREATE DATABASE allbirds;

USE allbirds;

CREATE TABLE products (
  _id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (_id)
);

CREATE TABLE reviews (
  _id INT NOT NULL AUTO_INCREMENT,
  customerName VARCHAR(20) NOT NULL,
  createdAt DATE,
  rating INT,
  commentTitle VARCHAR(20) NOT NULL,
  comment VARCHAR(200) NOT NULL,
  product_id INT,
  PRIMARY KEY (_id),
  FOREIGN KEY (product_id) REFERENCES products(_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/database/schema.sql
 *  to create the database and the tables.*/
