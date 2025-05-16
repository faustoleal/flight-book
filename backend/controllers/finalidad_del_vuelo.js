const finalidadRouter = require("express").Router();

const { FinalidadDelVuelo } = require("../models");

finalidadRouter.get("/", async (req, res) => {
  const finalidades = await FinalidadDelVuelo.findAll();
  res.json(finalidades);
});

finalidadRouter.post("/", async (req, res) => {
  try {
    const finalidad = await FinalidadDelVuelo.create(req.body);
    res.status(201).json(finalidad);
  } catch (error) {
    res.json({ error: "something happend", error });
  }
});

module.exports = finalidadRouter;
