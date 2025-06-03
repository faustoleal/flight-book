const horasDeVueloRouter = require("express").Router();

const { HorasDeVuelo, Pilotos, Aviones } = require("../models");

horasDeVueloRouter.get("/", async (req, res) => {
  const { page, size } = req.query;
  let where = {};
  if (req.query.where) {
    where = {
      pilotoId: req.query.where,
    };
  }

  const horas = await HorasDeVuelo.findAll({
    attributes: {
      exclude: ["pilotoId", "avionMatricula"],
    },
    where,
    limit: size,
    offset: page * size,
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

horasDeVueloRouter.post("/", async (req, res) => {
  try {
    const hora = await HorasDeVuelo.create(req.body);
    res.json(hora);
  } catch (error) {
    res.json({ error: "error", error });
  }
});

module.exports = horasDeVueloRouter;
