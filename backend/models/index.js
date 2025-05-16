const Aviones = require("./aviones");
const Aerdromos = require("./aerodromos");
const Pilotos = require("./pilotos");
const FinalidadDelVuelo = require("./finalidad_del_vuelo");
const HorasDeVuelo = require("./horas_de_vuelo");
const Aerodromos = require("./aerodromos");

Pilotos.hasMany(HorasDeVuelo);
HorasDeVuelo.belongsTo(Pilotos);

HorasDeVuelo.belongsTo(Aviones, { as: "avion" });
Aviones.hasOne(HorasDeVuelo, { as: "avion" });

Pilotos.sync({ alter: true });
Aviones.sync({ alter: true });
Aerodromos.sync({ alter: true });
FinalidadDelVuelo.sync({ alter: true });
HorasDeVuelo.sync({ alter: true });

module.exports = {
  Pilotos,
  Aviones,
  Aerodromos,
  FinalidadDelVuelo,
  HorasDeVuelo,
};
