const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" })

const configDB = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_password,
  {
    host: process.env.db_host,
    dialect: "postgres",
  }
);

module.exports = configDB;
