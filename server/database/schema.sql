DROP DATABASE IF EXISTS allbirds_reviews;

CREATE DATABASE allbirds_reviews;

USE allbirds_reviews;

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
