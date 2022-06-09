CREATE DATABASE siteInstitucional;
USE siteInstitucional;

CREATE TABLE culinaria (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nomeCuli VARCHAR(50),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
); 

INSERT INTO culinaria VALUES (1, 'Gastrônomia Japonesa', null),
							 (2, 'Gastrônomia Portugesa', null),
							 (3, 'Gastrônomia Espanhola', null),
							 (4, 'Gastrônomia Francesa', null),
							 (5, 'Gastrônomia Italiana', null),
							 (6, 'Gastrônomia Árabe', null),
							 (7, 'Gastrônomia Brasileira', null),
							 (8, 'Gastrônomia Coreana', null),
							 (9, 'Gastrônomia Indiana', null),
							 (10, 'Gastrônomia Israelense', null),
							 (11, 'Gastrônomia Indonésia', null),
							 (12, 'Gastrônomia Chinesa', null),
							 (13, 'Gastrônomia Mexicana', null),
							 (14, 'Gastrônomia Argentina', null),
							 (15, 'Gastrônomia Colombiana', null),
							 (16, 'Gastrônomia Marroquina', null);
 
SELECT * FROM usuario;

SELECT * FROM culinaria;
                           
