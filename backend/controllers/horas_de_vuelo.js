const horasDeVueloRouter = require("express").Router();
const { HorasDeVuelo, Pilotos, Aviones } = require("../models");
const { sequelize } = require("../utils/db");
const middelware = require("../utils/middelware");

horasDeVueloRouter.get("/", async (req, res) => {
  const horas = await HorasDeVuelo.findAll();
  res.json(horas);
});

horasDeVueloRouter.get("/:id", async (req, res) => {
  const horas = await HorasDeVuelo.findAll({
    where: {
      pilotoId: req.params.id,
    },
    exclude: ["avionMatricula"],
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

horasDeVueloRouter.get("/:id/totales", async (req, res) => {
  try {
    const totales = await HorasDeVuelo.findAll({
      where: {
        pilotoId: req.params.id,
      },
      attributes: [
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "local_dia_p + local_dia_c + travesia_dia_p + travesia_dia_c"
            )
          ),
          "total_dia",
        ],
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "local_noche_p + local_noche_c + travesia_noche_p + travesia_noche_c"
            )
          ),
          "total_noche",
        ],
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "local_dia_p + local_noche_p + local_noche_p + local_noche_c"
            )
          ),
          "total_local",
        ],
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "travesia_dia_p + travesia_noche_p + travesia_dia_c + travesia_noche_c"
            )
          ),
          "total_travesia",
        ],
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "local_dia_p + local_noche_p  + travesia_dia_p + travesia_noche_p "
            )
          ),
          "total_alMando",
        ],
        [
          sequelize.fn(
            "SUM",
            sequelize.literal(
              "local_dia_c + local_noche_c + travesia_dia_c + travesia_noche_c + local_dia_p + local_noche_p + travesia_dia_p + travesia_noche_p"
            )
          ),
          "total_horas",
        ],
        [
          sequelize.fn("SUM", sequelize.col("aterrizajes")),
          "total_aterrizajes",
        ],
      ],
    });
    res.json(totales);
  } catch (error) {
    res.json(error);
  }
});

horasDeVueloRouter.post(
  "/",
  middelware.pilotoExtractor,
  async (req, res, next) => {
    try {
      const hora = await HorasDeVuelo.create({
        ...req.body,
        pilotoId: req.piloto.id,
      });
      res.json(hora);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = horasDeVueloRouter;
