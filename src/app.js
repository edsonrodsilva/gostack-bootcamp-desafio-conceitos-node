const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  let { title, url, techs } = request.body;
  let repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  let { id } = request.params;
  let { title, url, techs } = request.body;

  let findReposytoryIndex = repositories.findIndex(repository => repository.id === id);

  if(findReposytoryIndex === -1) {
    return response.status(400).json({error: 'Repository does not exists'});
  }

  let repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[findReposytoryIndex].likes
  };

  repositories[findReposytoryIndex].repository;

  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  let { id } = request.params;

  let findReposytoryIndex = repositories.findIndex(repository => repository.id === id) 

  if(findReposytoryIndex >= 0) {
    repositories.splice(findReposytoryIndex, 1);
  } else {
    return response.status(400).send({error: 'Repository does not exists'})
  }

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  let { id } = request.params;

  let findReposytoryIndex = repositories.findIndex(repository => repository.id === id) 

  if(findReposytoryIndex === -1) {
    return response.status(400).json({error: 'Repository does not exists'});
  }
  
  repositories[findReposytoryIndex].likes += 1;

  return response.json(repositories[findReposytoryIndex]);

});

module.exports = app;
