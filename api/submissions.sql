BEGIN;

CREATE DATABASE RESOURCES;
/c resources;

CREATE TABLE submissions(
  id SERIAL,
  title VARCHAR(64),
  tool VARCHAR(64),
  description varchar(256),
  url VARCHAR(256),
  cost INT
);

INSERT INTO submissions ( title, tool, description, url, cost ) VALUES ( 'C++ Udemy Course', 'C++', 'In depth C++ programming from beginner to master', 'https://www.udemy.com/course/beginning-c-plus-plus-programming/learn/lecture/9535214?start=0#overview', 15 );

INSERT INTO submissions ( title, tool, description, url, cost ) VALUES ( 'PHP Laravel Crash Course', 'PHP Laravel', 'Great youtube series to learn laravel, a PHP framework', 'https://www.youtube.com/watch?v=eD4yMI-IR8g&list=PLpzy7FIRqpGC8Jk6gyWdSVdxCVXZAsenQ', 0 );

INSERT INTO submissions ( title, tool, description, url, cost ) VALUES ( 'Coders Tape VUE crash course', 'Vue', 'Vue from beginning to master hosted by youtube channel coders tape', 'https://www.youtube.com/watch?v=wVmSvDqojBc', 0 );
