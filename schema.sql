DROP DATABASE IF EXISTS cambo_DB;

CREATE DATABASE cambo_DB;

USE cambo_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  proname VARCHAR(45) NOT NULL,
  depname VARCHAR(45) NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity SMALLINT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (proname,depname,price,quantity)
VALUES ("Super Jet","Aviation",3500000.93,5),("Magical Flying Machine","Aviation",80085,13),
("Paper Towels","Cleaning Supplies",3,3500),("Grandmother","Family Planning",0.2,3),
("Yellowtail","Meat",13,50),("Cerveza","Alcohol",10,59),("Soap","Cleaning Supplies",1.5,600),
("Kisses","Love",99,5),("Hershey Kisses","Candy",7,643)