DROP DATABASE IF EXISTS cambo_DB;

CREATE DATABASE cambo_DB;

USE cambo_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  proname VARCHAR(45) NOT NULL,
  depname VARCHAR(45) NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity SMALLINT NOT NULL
  PRIMARY KEY (id)
);

INSERT INTO products (proname,depname,price,quantity)
VALUES ("Super Jet","Aviation",3500000.93,5)