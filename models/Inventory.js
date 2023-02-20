const { Sequelize, Model, DataTypes, DATE } = require("sequelize");
const configDB = require("../database/config");

const Inventory = configDB.define(
  "Inventory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "inventories",
  }
);

module.exports = Inventory;
