const { Sequelize, Model, DataTypes, DATE } = require("sequelize");
const configDB = require("../database/config");

const Profile = configDB.define(
  "Profile",
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
    tableName: "profiles",
  }
);


module.exports = Profile;
