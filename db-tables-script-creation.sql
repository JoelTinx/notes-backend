CREATE DATABASE notesdb;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(100),
  password VARCHAR(250),
  first_name VARCHAR(160),
  last_name VARCHAR(160),
  full_name VARCHAR(160),
  status BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO users (username, PASSWORD, first_name, last_name, full_name)
VALUES ('admin',	'$2a$10$YGmRovazMIWZADLlsNZ8Bud06I/0nThnxz9.fpsgU4mmplbqsTtse',	'Dennis Joel',	'Tinoco Rojas',	'Dennis Joel Tinoco Rojas');
-- username: admin / password: 123456 
SELECT * FROM users u;

CREATE TABLE notes (
  id SERIAL,
  title VARCHAR(250),
  description VARCHAR(1000),
  tag VARCHAR(250),
  color VARCHAR(100),
  owner INT,
  status BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

SELECT * FROM notes n;

