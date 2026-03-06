Este é um modelo de README.md para o projeto de Controle de Pedidos em Microsserviços, baseado no tutorial fornecido.

# Controle de Pedidos - API Microsserviços

Este projeto consiste em uma arquitetura de microsserviços para a gestão de clientes e pedidos, utilizando Node.js, Express, Sequelize e MySQL. O sistema é dividido em dois domínios independentes que se comunicam via HTTP.

## Tecnologias Utilizadas

* Node.js (v18+) 


* Express 


* Sequelize (ORM) 


* MySQL 


* dotenv 



## Estrutura do Projeto

O repositório está dividido em dois serviços principais:

* 
**cliente-service**: Gerencia o cadastro de clientes na porta 3001.


* 
**pedido-service**: Gerencia os pedidos na porta 3002 e valida a existência do cliente no serviço anterior.



## Rotas da API

### Serviço de Clientes (Porta 3001)

* GET /clientes - Lista todos os clientes cadastrados.


* GET /clientes/:id - Retorna os detalhes de um cliente específico.


* POST /clientes - Cria um novo cliente.


* PUT /clientes/:id - Atualiza os dados de um cliente existente.


* DELETE /clientes/:id - Remove um cliente do sistema.



### Serviço de Pedidos (Porta 3002)

* GET /pedidos - Lista todos os pedidos realizados.


* GET /pedidos/:id - Retorna os detalhes de um pedido específico.


* POST /pedidos - Cria um novo pedido (valida o ID do cliente no cliente-service).


* PUT /pedidos/:id - Atualiza as informações de um pedido.


* DELETE /pedidos/:id - Remove um pedido do sistema.



## Configuração

1. Instale as dependências em cada pasta (`cliente-service` e `pedido-service`) com o comando `npm install`.


2. Configure os arquivos `.env` em cada serviço com as credenciais do seu banco de dados MySQL.


3. Certifique-se de criar os bancos de dados `cliente_db` e `pedido_db` antes de iniciar.


4. Inicie cada serviço utilizando o comando `npm start`.
