const horasDeVueloRouter = require("express").Router();

const {
  HorasDeVuelo,
  FinalidadDelVuelo,
  Pilotos,
  Aerodromos,
  Aviones,
} = require("../models");

horasDeVueloRouter.get("/", async (req, res) => {
  const horas = await HorasDeVuelo.findAll({
    attributes: {
      exclude: ["pilotoId", "avionMatricula"],
    },
    include: [
      {
        model: Pilotos,
        attributes: { exclude: ["usuario", "id"] },
      },
      {
        model: Aviones,
        as: "avion",
        attributes: ["matricula", "modelo", "potencia", "clase"],
      },
    ],
  });

  res.json(horas);
});

horasDeVueloRouter.post("/", async (req, res) => {
  try {
    const hora = await HorasDeVuelo.create(req.body);
    res.json(hora);
  } catch (error) {
    res.json({ error: "error", error });
  }
});

module.exports = horasDeVueloRouter;
