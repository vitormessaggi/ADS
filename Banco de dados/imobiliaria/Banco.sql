create database Imobiliaria;
use Imobiliaria;

create table clientes(
	id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL);
    
    create table corretores(
    id_corretor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    creci VARCHAR(20) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL );
    
    CREATE TABLE proprietarios(
	id_proprietario INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	cpf VARCHAR(14) UNIQUE NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	email VARCHAR(100) NOT NULL);
    
    CREATE TABLE tipoImoveis (
    id_tipo INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);
    
    CREATE TABLE imoveis (
    id_imovel INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    area DECIMAL(10,2) NOT NULL,
    quartos INT,
    banheiros INT,
    vagas INT,
    id_tipo INT NOT NULL,
    id_proprietario INT NOT NULL,
    FOREIGN KEY (id_tipo) REFERENCES tipoImoveis(id_tipo),
    FOREIGN KEY (id_proprietario) REFERENCES proprietarios(id_proprietario)
);

CREATE TABLE locacao (
    id_locacao INT AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    valor_mensal DECIMAL(10,2),
    id_imovel INT NOT NULL,
    id_cliente INT NOT NULL,
    id_corretor INT NOT NULL,
    FOREIGN KEY (id_imovel) REFERENCES imoveis(id_imovel),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_corretor) REFERENCES corretores(id_corretor)
);

CREATE TABLE venda (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    valor_venda DECIMAL(10,2),
    id_imovel INT NOT NULL,
    id_comprador INT NOT NULL,
    id_corretor INT NOT NULL,
    FOREIGN KEY (id_imovel) REFERENCES imoveis(id_imovel),
    FOREIGN KEY (id_comprador) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_corretor) REFERENCES corretores(id_corretor)
);


    
    
    