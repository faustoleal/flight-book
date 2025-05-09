const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class FinalidadDelVuelo extends Model {}

FinalidadDelVuelo.init(
  {
    finalidad: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "finalidad_del_vuelo",
  }
);

module.exports = FinalidadDelVuelo;
