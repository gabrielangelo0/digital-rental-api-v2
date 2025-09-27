const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/database");
const User = require("./src/models/User");
const Car = require("./src/models/Car");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cars", async (req, res) => {
  try {
    const allCars = await Car.findAll();

    res.status(200).json(allCars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/cars", async (req, res) => {
  try {
    console.log(req.body);
    const newCar = await Car.create(req.body);

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas de usuários
// Rotas -> GET, POST, PUT, DELETE

app.get("/users", async (req, res) => {});

// Rotas de usuários
// Rotas -> GET, POST, PUT, DELETE

app.get("/users", async (req, res) => {});

sequelize
  .sync({ alter: true }) // Esse comando cria as tabelas no banco de dados, se elas não existirem
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Database connected successfully and app listening on port ${port}`
      )
    );
  })
  .catch((error) => {
    console.log("err: ", error.message);
  });
