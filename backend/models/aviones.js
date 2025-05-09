const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Aviones extends Model {}

Aviones.init(
  {
    matricula: {
      type: DataTypes.CHAR(6),
      primaryKey: true,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    potencia: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    clase: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "aviones",
  }
);

module.exports = Aviones;
