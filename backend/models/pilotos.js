const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Pilotos extends Model {}

Pilotos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "pilotos",
  }
);

module.exports = Pilotos;
