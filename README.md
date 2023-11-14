# Cadastro e Login de Usuários utilizando dados do Database

> ## Descrição
>
> Meu projeto é uma aplicação web que permite o cadastro e login de usuários, armazenando as informações de forma segura no meu banco de dados MySQL. Além disso, a aplicação consome uma API de assuntos dos Estados Unidos para enriquecer a experiência do usuário.

> ## Dica
> Você consegue visualizar o conteúdo da home com os conteúdos virais dos Estados Unidos digitando /home.
> ## Exemplo
> localhost:5173/home

## 🧰 Bibliotecas, frameworks e ferramentas

> **⚠️ Aviso:** esta aplicação ainda está em construção até o presente momento. As ferramentas listadas abaixo estarão separados por uso atual ou ser estipulada futuramente em razão das regras de negócio.

### Frontend:

- React
- TypeScript

### Backend:

- Node.js
- Express.js

### Banco de Dados:

- MySQL

### Ferramentas e Bibliotecas:

- Dotenv (para configuração de variáveis de ambiente)
- Docker (para containerização)


> ## Entidade MySQL: Login
A entidade login no banco de dados é responsável por armazenar as informações dos usuários. Ela possui os seguintes campos:

| Campo    | Descrição                             |
|----------|---------------------------------------|
| id       | Identificador único do usuário        |
| name     | Nome do usuário                       |
| email    | Endereço de e-mail do usuário         |
| password | Senha do usuário                      |


> ## Como rodar o projeto de forma tradicional

Primeiro você vai da git clone do projeto:

```
git clone $URL_DO_PROJETO.git
```

Em seguida, você vai baixar as dependências:

```
npm install  
```

Ou

```
yard add
```

## Inicializando o Backend

Na pasta do backend, execute:

```
npm start
```

O servidor estará disponível em http://localhost:8081.

## Inicializando o Frontend
Na pasta do frontend, execute:

```
yarn dev
```
Ou
```
npm run dev
```
A aplicação estará disponível em http://localhost:5173.


## Como rodar o Projeto com Docker 
> Atualmente, estou configurando o Docker. Porém, ao executar o docker-compose up o frontend da aplicação vai rodar na porta http://localhost:3000. Falta eu verificar o que está acontecendo para o backend não rodar em conjunto com o banco de dados.

