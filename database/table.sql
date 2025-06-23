create database if not exists db_FeedBackCell;
use db_FeedBackCell;

CREATE TABLE usuarios (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE celulares(
	id_celular INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    imagem VARCHAR(100) NOT NULL,
    likes INT DEFAULT 0,
	deslikes INT DEFAULT 0
);

CREATE TABLE comentarios(
	id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
	id_celular INT NOT NULL,
    texto VARCHAR(140) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_celular) REFERENCES celulares(id_celular) ON DELETE CASCADE
);
