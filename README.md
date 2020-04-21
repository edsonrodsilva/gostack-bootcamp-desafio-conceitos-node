<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="gostack" width="200">
</p>

Bootcamp GoStack - Desafio 01 - Conceitos de NodeJs

Aplicação para armazenar repositórios e likes.

OBS: Por se tratar de um projeto com finalidade de aplicar conhecimentos sobre APIs e Middlewares, não possui conexão com banco de dados.

## Tecnologias e ferramentas

<ul>
<li>NodeJs</li>
<li>Express</li>
<li>Nodemon para desenvolvimento</li>
</ul>

<p> Foram abordados conceitos de rotas, CRUD, middleware, desestruturação, filtros e mais...</p>

#### Inicio

#### Instalar as dependências:

```
npm install
```
ou
```
yarn
```

#### Executar a aplicação:

```
node src/index.js
```
ou
```
npm run dev
```
ou
```
yarn dev
```

#### Endereço: **http://localhost:3000**

**Rodas da aplicação**

```
Listar todos repositories
GET - '/repositories'

Exibi um repository
GET - '/repositories/1'

Cadastra repository
POST - '/repositories'
request: { "id": 2, "title": "título" } (json)

atualizar um repository
param int id - Id do repository
PUT - '/repositories/:id'
corpo da requisição: { title: "título do repository" } (json)

deleta um repository
param int id - Id do repository
DELETE - '/repositories/:id'

Registra um like para um repository
POST - '/repositories/:id/likes'

```