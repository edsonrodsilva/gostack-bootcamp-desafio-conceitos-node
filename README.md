<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="gostack" width="200">
</p>

yarn 

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
@params uuid => Universally Unique Identifier 
GET - '/repositories/uuid'

Cadastra repository
POST - '/repositories'
request: { 
  "title": "url",
  "url": ""
  "techs": []
}

Atualizar um repository
@params uuid => Universally Unique Identifier 
PUT - '/repositories/:uuid'
corpo da requisição: {
  "title": "url",
  "url": ""
  "techs": []
}

Delete um repository
@params uuid => Universally Unique Identifier 
DELETE - '/repositories/:uuid'

Registra um like para um repository
@params uuid => Universally Unique Identifier 
POST - '/repositories/:uuid/likes'

Registra um dislike para um repository
@params uuid => Universally Unique Identifier 
POST - '/repositories/:uuid/dislikes'

```