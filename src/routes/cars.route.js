const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

router.get("/cars", async (req, res) => {
  /*
      #swagger.tags = ['Cars']
      #swagger.summary = 'Retorna uma lista de carros cadastrados.'
      #swagger.description = 'This endpoint will return a user by id...'
  */

  try {
    const allCars = await Car.findAll();

    res.status(200).json(allCars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/cars", async (req, res) => {

  /*
      #swagger.tags = ['Cars']
      #swagger.summary = 'Cria um novo carro no banco de dados.'
      #swagger.description = 'Esse endpoint espera receber dados referentes a um carro para que seu cadastro seja realizado na plataforma.'
  */

  try {
    console.log(req.body);

    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/bodyCar"
                    }  
                }
            }
        } 
    */

    const newCar = await Car.create(req.body);

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    await car.update(req.body);

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    await car.destroy();

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
