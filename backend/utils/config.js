require("dotenv").config();

const PORT = process.env.PORT;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;

module.exports = {
  PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
};
