const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const bodyParser = require('body-parser');

const express = require("express");
const cors = require("cors");
const carsRoutes = require("../src/routes/cars.route");

const app = express();

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(carsRoutes)

// Rotas de usuários
// Rotas -> GET, POST, PUT, DELETE

app.get("/users", async (req, res) => {});

// Rotas de usuários
// Rotas -> GET, POST, PUT, DELETE

app.get("/users", async (req, res) => {});

module.exports = app;
