DROP DATABASE IF EXISTS foodIndex_db;
CREATE DATABASE foodIndex_db;
USE foodIndex_db;

CREATE TABLE foodIndex 
(
    'Food' VARCHAR(50) NOT NULL,
    'Serving Size' VARCHAR(50) NOT NULL,
    'Calories' INT NOT NULL,
    'Fat(grams)' INT NOT NULL,
    'Carbohydrates(grams0' INT NOT NULL,
    'Sugar(grams)' INT NOT NULL,
    'Protein' INT NOT NULL,
    'Sodium(milligrams)' INT NOT NULL,
    'Fiber(grams)' INT NOT NULL
);
