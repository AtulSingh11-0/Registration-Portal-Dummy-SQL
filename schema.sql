CREATE DATABASE PORTAL;
USE PORTAL;

CREATE TABLE mrd (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  college VARCHAR(50) NOT NULL,
  department VARCHAR(10) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(10) UNIQUE NOT NULL,
  roll INT UNIQUE NOT NULL,
  year VARCHAR(10) NOT NULL
);

INSERT INTO mrd (college, department, email, name, phone, roll, year)
VALUES
('MSIT', 'BCA', 'cocatul11@gmail.com', 'Atul Singh', '9123766255', 25, '2nd'),
('Techno', 'BCA', 'b_k@techno.com', 'Tilak Khandelwal', '1234567890', 45, '2nd');