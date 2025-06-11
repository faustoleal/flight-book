const pilotosRouter = require("express").Router();
const bcrypt = require("bcrypt");

const { Pilotos, HorasDeVuelo } = require("../models");

pilotosRouter.get("/", async (req, res) => {
  try {
    const pilotos = await Pilotos.findAll({
      attributes: { exclude: ["passwordHash"] },
      include: {
        model: HorasDeVuelo,
      },
    });
    res.json(pilotos);
  } catch (error) {
    res.json(error);
  }
});

pilotosRouter.post("/", async (req, res) => {
  const { name, usuario, password } = req.body;

  if (!password) {
    res.status(400).json({ error: "password is require" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const piloto = await Pilotos.create({
      name,
      usuario,
      passwordHash,
    });

    res.json("usuario creado correctamente");
  } catch (error) {
    res.json(error);
  }
});

module.exports = pilotosRouter;
