const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class HorasDeVuelo extends Model {}

HorasDeVuelo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    horaSalida: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    desde: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: { model: "aerodromos", key: "aerodromo" },
    },
    hasta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: { model: "aerodromos", key: "aerodromo" },
    },
    horaLlegada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finalidad: {
      type: DataTypes.ENUM("ENT", "INST", "READP"),
      allowNull: false,
    },
    avionMatricula: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      references: { model: "aviones", key: "matricula" },
    },
    localDiaP: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    localDiaC: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    localNocheP: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    localNocheC: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesiaDiaP: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesiaDiaC: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesiaNocheP: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesiaNocheC: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    aterrizajes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructorDeVuelo: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    reactor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    multiMotor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    turboHelice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    aeroaplicador: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    instrumentosRealP: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    instrumentosRealC: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    capota: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "horas_de_vuelos",
  }
);

module.exports = HorasDeVuelo;
