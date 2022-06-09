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
                           
SELECT * FROM usuario;

SELECT * FROM culinaria;
                           