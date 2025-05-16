const pilotosRouter = require("express").Router();

const { Pilotos, HorasDeVuelo, Aviones } = require("../models");

pilotosRouter.get("/", async (req, res) => {
  const pilotos = await Pilotos.findAll({
    include: [
      {
        model: HorasDeVuelo,
        include: {
          model: Aviones,
          as: "avion",
        },
      },
    ],
  });
  res.json(pilotos);
});

pilotosRouter.post("/", async (req, res) => {
  try {
    const piloto = await Pilotos.create(req.body);
    res.status(201).json(piloto);
  } catch (error) {
    res.json({ error: "something happend", error });
  }
});

module.exports = pilotosRouter;
