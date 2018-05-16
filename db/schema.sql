DROP DATABASE IF EXISTS foodIndex_db;
CREATE DATABASE foodIndex_db;
USE foodIndex_db;

CREATE TABLE foodIndex 
(
    Food VARCHAR(50) NOT NULL,
    Serving_Size VARCHAR(50) NOT NULL,
    Calories INT NOT NULL,
    Fat_grams INT NOT NULL,
    Carbohydrates_grams INT NOT NULL,
    Sugar_grams INT NOT NULL,
    Protein INT NOT NULL,
    Sodium_milligrams INT NOT NULL,
    Fiber_grams INT NOT NULL
);
