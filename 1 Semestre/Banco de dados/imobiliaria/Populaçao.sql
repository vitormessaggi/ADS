use imobiliaria;

INSERT INTO clientes (nome, cpf, telefone, email) VALUES
('Ana Silva', '111.111.111-11', '(11)98765-4321', 'ana.silva@email.com'),
('Bruno Costa', '222.222.222-22', '(11)97654-3210', 'bruno.costa@email.com'),
('Carla Dias', '333.333.333-33', '(11)96543-2109', 'carla.dias@email.com'),
('Daniel Souza', '444.444.444-44', '(11)95432-1098', 'daniel.souza@email.com'),
('Eduarda Lima', '555.555.555-55', '(11)94321-0987', 'eduarda.lima@email.com'),
('Fernando Gomes', '666.666.666-66', '(11)93210-9876', 'fernando.gomes@email.com'),
('Gabriela Nunes', '777.777.777-77', '(11)92109-8765', 'gabriela.nunes@email.com'),
('Henrique Pereira', '888.888.888-88', '(11)91098-7654', 'henrique.pereira@email.com'),
('Isabela Rocha', '999.999.999-99', '(11)90987-6543', 'isabela.rocha@email.com'),
('Joao Santos', '101.101.101-01', '(11)98877-6655', 'joao.santos@email.com');

INSERT INTO corretores (nome, creci, telefone, email) VALUES
('Mariana Almeida', 'CRECI-SP 123456-F', '(11)91122-3344', 'mariana.almeida@imobiliaria.com'),
('Pedro Oliveira', 'CRECI-SP 654321-F', '(11)92233-4455', 'pedro.oliveira@imobiliaria.com'),
('Juliana Martins', 'CRECI-SP 789012-F', '(11)93344-5566', 'juliana.martins@imobiliaria.com'),
('Rafael Silva', 'CRECI-SP 210987-F', '(11)94455-6677', 'rafael.silva@imobiliaria.com'),
('Patricia Fernandes', 'CRECI-SP 345678-F', '(11)95566-7788', 'patricia.fernandes@imobiliaria.com'),
('Carlos Rodrigues', 'CRECI-SP 876543-F', '(11)96677-8899', 'carlos.rodrigues@imobiliaria.com'),
('Sandra Batista', 'CRECI-SP 901234-F', '(11)97788-9900', 'sandra.batista@imobiliaria.com'),
('Ricardo Farias', 'CRECI-SP 098765-F', '(11)98899-0011', 'ricardo.farias@imobiliaria.com'),
('Larissa Mendes', 'CRECI-SP 112233-F', '(11)99900-1122', 'larissa.mendes@imobiliaria.com'),
('Felipe Dantas', 'CRECI-SP 445566-F', '(11)90011-2233', 'felipe.dantas@imobiliaria.com');

INSERT INTO proprietarios (nome, cpf, telefone, email) VALUES
('Roberto Pires', '123.456.789-01', '(11)91234-5678', 'roberto.pires@email.com'),
('Monica Vieira', '987.654.321-09', '(11)98765-4321', 'monica.vieira@email.com'),
('Sergio Costa', '456.789.012-34', '(11)93456-7890', 'sergio.costa@email.com'),
('Viviane Santos', '012.345.678-90', '(11)90123-4567', 'viviane.santos@email.com'),
('André Fernandes', '789.012.345-67', '(11)97890-1234', 'andre.fernandes@email.com'),
('Claudia Borges', '321.654.987-01', '(11)92109-8765', 'claudia.borges@email.com'),
('Gustavo Lopes', '654.987.321-09', '(11)95432-1098', 'gustavo.lopes@email.com'),
('Renata Castro', '987.321.654-01', '(11)98765-4321', 'renata.castro@email.com'),
('Marcelo Pires', '112.233.445-56', '(11)91122-3344', 'marcelo.pires@email.com'),
('Beatriz Ribeiro', '665.544.332-21', '(11)96655-4433', 'beatriz.ribeiro@email.com');

INSERT INTO tipoImoveis (descricao) VALUES
('Apartamento'),
('Casa'),
('Terreno'),
('Loja Comercial'),
('Sala Comercial'),
('Cobertura'),
('Galpão'),
('Chácara'),
('Flat'),
('Casa em Condomínio');

INSERT INTO imoveis (endereco, cidade, estado, cep, valor, area, quartos, banheiros, vagas, id_tipo, id_proprietario) VALUES
('Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', 500000.00, 80.50, 2, 1, 1, 1, 1),
('Avenida Principal, 456', 'Campinas', 'SP', '13000-000', 800000.00, 150.00, 3, 2, 2, 2, 2),
('Alameda dos Anjos, 789', 'São Caetano do Sul', 'SP', '09500-000', 300000.00, 200.00, NULL, NULL, NULL, 3, 3),
('Travessa da Esperança, 10', 'Santos', 'SP', '11000-000', 1200000.00, 100.00, NULL, 2, 1, 4, 4),
('Praça da Liberdade, 20', 'Guarulhos', 'SP', '07000-000', 450000.00, 60.00, NULL, 1, 0, 5, 5),
('Rua do Porto, 30', 'Ribeirão Preto', 'SP', '14000-000', 950000.00, 180.00, 4, 3, 3, 6, 6),
('Estrada Velha, 40', 'Sorocaba', 'SP', '18000-000', 2500000.00, 500.00, NULL, 4, 10, 7, 7),
('Sitio da Paz, 50', 'Jundiaí', 'SP', '13200-000', 700000.00, 1000.00, 3, 2, 4, 8, 8),
('Rua Nova, 60', 'Osasco', 'SP', '06000-000', 350000.00, 45.00, 1, 1, 0, 9, 9),
('Rua das Palmeiras, 70', 'Barueri', 'SP', '06400-000', 1500000.00, 200.00, 4, 3, 3, 10, 10);

INSERT INTO locacao (data_inicio, data_fim, valor_mensal, id_imovel, id_cliente, id_corretor) VALUES
('2023-01-15', '2024-01-14', 2500.00, 1, 1, 1),
('2023-02-01', '2024-02-28', 4000.00, 2, 2, 2),
('2023-03-10', NULL, 1500.00, 3, 3, 3),
('2023-04-05', '2024-04-04', 6000.00, 4, 4, 4),
('2023-05-20', NULL, 2200.00, 5, 5, 5),
('2023-06-01', '2024-05-31', 4800.00, 6, 6, 6),
('2023-07-10', NULL, 12000.00, 7, 7, 7),
('2023-08-15', '2024-08-14', 3500.00, 8, 8, 8),
('2023-09-01', NULL, 1800.00, 9, 9, 9),
('2023-10-20', '2024-10-19', 7500.00, 10, 10, 10);

INSERT INTO venda (data_venda, valor_venda, id_imovel, id_comprador, id_corretor) VALUES
('2022-11-20', 480000.00, 1, 10, 1),
('2023-01-05', 780000.00, 2, 9, 2),
('2023-03-01', 290000.00, 3, 8, 3),
('2023-05-12', 1150000.00, 4, 7, 4),
('2023-07-25', 430000.00, 5, 6, 5),
('2023-09-01', 920000.00, 6, 5, 6),
('2023-11-10', 2400000.00, 7, 4, 7),
('2024-01-15', 680000.00, 8, 3, 8),
('2024-03-20', 340000.00, 9, 2, 9),
('2024-05-01', 1450000.00, 10, 1, 10);