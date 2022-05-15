-- DEFINIÇÃO DO BANCO DE DADOS

CREATE DATABASE LibDB; 

USE LibDB;

CREATE TABLE Bibliotecario (
    id_bibliotecario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_bibliotecario varchar(255)
);

CREATE TABLE Livro (
    id_livro INTEGER PRIMARY KEY AUTOINCREMENT,
    id_bibliotecario INTEGER,
    isbn_livro INTEGER,
    local_publicacao varchar(50),
    editora varchar(50),
    num_da_edicao INTEGER,
    tradutor varchar(150),
    titulo varchar(150),
    data_de_publicacao DATE,
    autores varchar(255),
    num_de_paginas INTEGER,
    CONSTRAINT FK_Livro_Bibliotecario FOREIGN KEY (id_bibliotecario) REFERENCES Bibliotecario(id_bibliotecario)
);

CREATE TABLE Emprestimo(
    id_emprestimo INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cliente INTEGER,
    id_bibliotecario INTEGER,
    id_livro INTEGER,
    data_retirada DATETIME,
    CONSTRAINT FK_Emprestimo_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente), 
    CONSTRAINT FK_Emprestimo_Livro FOREIGN KEY (id_livro) REFERENCES Livro(id_livro),
    CONSTRAINT FK_Emprestimo_Bibliotecario FOREIGN KEY (id_bibliotecario) REFERENCES Bibliotecario(id_bibliotecario)
); 

CREATE TABLE Devolucao(
    id_devolucao INTEGER PRIMARY AUTOINCREMENT,
    id_cliente INTEGER,
    id_bibliotecario INTEGER,
    id_livro INTEGER,
    data_devolucao DATETIME,
    CONSTRAINT FK_Devolucao_Livro FOREIGN KEY (id_livro) REFERENCES Livro(id_livro),
    CONSTRAINT FK_Devolucao_Bibliotecario FOREIGN KEY (id_bibliotecario) REFERENCES Bibliotecario(id_bibliotecario)
    CONSTRAINT FK_Devolucao_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
); 

CREATE TABLE Cliente (
    id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf INTEGER,
    nome_cliente varchar(255),
    telefone INTEGER,
    endereco varchar(255),
    CONSTRAINT FK_Cliente_Telefone FOREIGN KEY (telefone) REFERENCES Telefone(numero)
);

CREATE TABLE Telefone (
    numero INTEGER PRIMARY KEY,
    id_cliente INTEGER,
    CONSTRAINT FK_Telefone_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);


-- CONSULTAS AO BANCO DE DADOS

-- Cadastro de novo cliente
INSERT INTO Cliente (id_cliente, cpf, nome_cliente, endereco) VALUES (001, 25616548962, "Roberval Mourão de Andrada", "Rua da Liberdade, 420");
INSERT INTO Telefone (numero, id_cliente) VALUES (0314981624, 001);
INSERT INTO Telefone (numero, id_cliente) VALUES (031987335051, 001);

-- Cadastro de novo livro

INSERT INTO Livro (id_livro, id_bibliotecario, isbn_livro, local_publicacao, editora, num_da_edicao, tradutor, titulo, data_de_publicacao, autores, num_de_paginas) VALUES (587, 057, 8573263598, "São Paulo - SP", "Editora 34", 2, " Boris Schnaiderman", "A morte de Ivan Ilitch", 2009-01-01, "Lev Tolstói", 96);

-- Verificar livros emprestado com prazo de devolução vencido 

SELECT * 
FROM Devolucao
WHERE data_devolucao > 2022-05-15 22:00:00
ORDER BY id_livro;

-- Novo empréstimo de livro 
INSERT INTO Emprestimo (id_emprestimo, id_cliente, id_bibliotecario, id_livro, data_retirada) VALUES (001, 054, 099, 045, 2022-05-13 15:43:54);







