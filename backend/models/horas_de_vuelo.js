const { Model, DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

class HorasDeVuelo extends Model {}

HorasDeVuelo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_de_salida: {
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
    hora_de_llegada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finalidad: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: { model: "finalidad_del_vuelo", key: "finalidad" },
    },
    avion: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      references: { model: "aviones", key: "matricula" },
    },
    local_dia_p: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    local_dia_c: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    local_noche_p: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    local_noche_c: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesia_dia_p: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesia_dia_c: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesia_noche_p: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    travesia_noche_c: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    aterrizajes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructor_de_vuelo: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    reactor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    multi_motor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    turbo_helice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    aeroaplicador: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    instrumentos_real_p: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    instrumentos_real_c: {
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
    modelName: "horas_de_vuelo",
  }
);

module.exports = HorasDeVuelo;
