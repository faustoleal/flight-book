const aerodromosRouter = require("express").Router();
const { Aerodromos } = require("../models");

aerodromosRouter.get("/", async (req, res) => {
  const aerodromos = await Aerodromos.findAll();
  res.json(aerodromos);
});

aerodromosRouter.post("/", async (req, res) => {
  try {
    const aerodromo = await Aerodromos.create(req.body);
    res.status(201).json(aerodromo);
  } catch (error) {
    res.json({ error: "something happend", error });
  }
});

module.exports = aerodromosRouter;
