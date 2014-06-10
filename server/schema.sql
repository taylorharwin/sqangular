CREATE DATABASE myproject;

USE project;

CREATE TABLE `names` (
  `name` VARCHAR(140),
  `objectID` INT(5),
  `createdAt` INT(10)
);

CREATE TABLE `faces` (
  `summary` VARCHAR(15),
  `objectID` INT(5)
);

CREATE TABLE `places` (
  `location` VARCHAR(20),
  `objectID` INT(5)
);
