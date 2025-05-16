const avionesRouter = require("express").Router();
const { Aviones } = require("../models");

avionesRouter.get("/", async (req, res) => {
  const aviones = await Aviones.findAll();
  res.json(aviones);
});

avionesRouter.post("/", async (req, res) => {
  try {
    const avion = await Aviones.create(req.body);
    res.status(201).json(avion);
  } catch (error) {
    res.json({ error: "something happend", error });
  }
});

module.exports = avionesRouter;
