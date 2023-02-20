const { Sequelize, Model, DataTypes, DATE } = require("sequelize");
const configDB = require("../database/config");
const Inventory = require("../models/Inventory");


const Company = configDB.define(
  "Company",
  {
    nit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "companies",
  }
);

Company.hasMany(Inventory);
Inventory.belongsTo(Company,{
  targetKey:'nit'
});

module.exports = Company;
