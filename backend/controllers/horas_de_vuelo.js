const horasDeVueloRouter = require("express").Router();
const { HorasDeVuelo, Pilotos, Aviones } = require("../models");
const middelware = require("../utils/middelware");

horasDeVueloRouter.get("/", async (req, res) => {
  const horas = await HorasDeVuelo.findAll({
    attributes: {
      exclude: ["pilotoId", "avionMatricula"],
    },
    include: [
      {
        model: Pilotos,
        attributes: { exclude: ["usuario", "passwordHash"] },
      },
      {
        model: Aviones,
        as: "avion",
      },
    ],
  });

  res.json(horas);
});

horasDeVueloRouter.post("/", middelware.pilotoExtractor, async (req, res) => {
  try {
    const hora = await HorasDeVuelo.create({
      ...req.body,
      pilotoId: req.piloto.id,
    });
    res.json(hora);
  } catch (error) {
    res.json({ error: "error", error });
  }
});

module.exports = horasDeVueloRouter;
