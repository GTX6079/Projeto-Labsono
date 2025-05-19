CREATE DATABASE labsono;
USE labsono;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE especialistas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  tipo ENUM('Clínica', 'Hospital', 'Médico') NOT NULL,
  endereco VARCHAR(200),
  cidade VARCHAR(100),
  estado VARCHAR(50),
  latitude DECIMAL(10, 6),
  longitude DECIMAL(10, 6),
  link_site VARCHAR(255),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT,
  url_youtube VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO especialistas (nome, tipo, endereco, cidade, estado, latitude, longitude, link_site) VALUES
('Clínica Sono Vida', 'Clínica', 'Rua Central, 100', 'São Leopoldo', 'RS', -29.762, -51.147, 'https://www.clinicasonovida.com.br'),
('Hospital do Sono São Lucas', 'Hospital', 'Av. Saúde, 200', 'São Leopoldo', 'RS', -29.764, -51.149, 'https://goo.gl/maps/q7xWcP9f4DfEf2TQA'),
('Centro de Medicina do Sono', 'Clínica', 'Rua do Sono, 123', 'São Leopoldo', 'RS', -29.765, -51.144, 'https://www.centromedicinadosono.com');
