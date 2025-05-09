const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Aerodromos extends Model {}

Aerodromos.init(
  {
    aerodromo: {
      type: DataTypes.STRING(4),
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "aerodromos",
  }
);

module.exports = Aerodromos;
