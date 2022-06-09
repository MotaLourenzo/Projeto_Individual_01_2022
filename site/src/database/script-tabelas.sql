CREATE DATABASE siteInstitucional;
USE siteInstitucional;

CREATE TABLE culinaria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomeCuli VARCHAR(50)
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    fkCulinaria INT,
    FOREIGN KEY (fkCulinaria) REFERENCES culinaria(id)
); 

INSERT INTO culinaria VALUES (1, 'Gastrônomia Japonesa'),
                             (2, 'Gastrônomia Portugesa'),
                             (3, 'Gastrônomia Espanhola'),
                             (4, 'Gastrônomia Francesa'),
                             (5, 'Gastrônomia Italiana'),
                             (6, 'Gastrônomia Árabe'),
                             (7, 'Gastrônomia Brasileira'),
                             (8, 'Gastrônomia Coreana'),
                             (9, 'Gastrônomia Indiana'),
                             (10, 'Gastrônomia Israelense'),
                             (11, 'Gastrônomia Indonésia'),
                             (12, 'Gastrônomia Chinesa'),
                             (13, 'Gastrônomia Mexicana'),
                             (14, 'Gastrônomia Argentina'),
                             (15, 'Gastrônomia Colombiana'),
                             (16, 'Gastrônomia Marroquina');
                             
                             select * from usuario;