DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grado SR80e Headphones", "electronics", 99, 47);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CORE 9 person Extended Dome Tent", "outdoors", 151.55, 28);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lenova Thinkpad 11.6' ", "electronics", 406, 47);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cozy Fleeze House Slippers", "clothing", 11, 100);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "electronics", 29.99, 1300);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Love & War", "books", 9.22, 1500);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Sweater", "clothing", 8.88, 30);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Travel Makeup Case", "beauty", 13, 25);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lavender Essential Oils", "beauty", 30, 20);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nikon D3500 Camera Kit", "electronics", 396.95, 10);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Klymit Static V Sleeping Pad", "outdoors", 50, 125);

