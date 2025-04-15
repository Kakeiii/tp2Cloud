DROP DATABASE IF EXISTS budbud;
CREATE DATABASE budbud;

USE budbud;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(20) NOT NULL,
	nom VARCHAR(30) NOT NULL,
	prenom VARCHAR(30) NOT NULL,
	courriel VARCHAR(50) NOT NULL,
	mdp VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS comptes;
CREATE TABLE comptes(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	`type` VARCHAR(30),
	nom VARCHAR(30),
	total FLOAT
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	nom VARCHAR(30),
	`type` VARCHAR(30)
);

DROP TABLE IF EXISTS transactions;
CREATE TABLE transactions(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	compte_id INT,
	category_id INT,
	detail VARCHAR(30),
	`date` DATE,
	total FLOAT
);

DROP TABLE IF EXISTS budget;
CREATE TABLE budget(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	category_id INT,
	`date` DATE,
	total FLOAT
);


ALTER TABLE comptes
	ADD FOREIGN KEY (user_id) REFERENCES users(id);
	
ALTER TABLE categories
	ADD FOREIGN KEY (user_id) REFERENCES users(id);
	
ALTER TABLE transactions
	ADD FOREIGN KEY (user_id) REFERENCES users(id),
	ADD FOREIGN KEY (compte_id) REFERENCES comptes(id),
	ADD FOREIGN KEY (category_id) REFERENCES categories(id);
	
ALTER TABLE budget
	ADD FOREIGN KEY (user_id) REFERENCES users(id),
	ADD FOREIGN KEY (category_id) REFERENCES categories(id);
	


