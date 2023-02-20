const { Sequelize, Model, DataTypes, DATE } = require("sequelize");
const configDB = require("../database/config");
const Profile = require("./Profile");
const Company = require("./Company");

const User = configDB.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
  }
);

Profile.hasOne(User);
User.belongsTo(Profile);

User.hasMany(Company);
Company.belongsTo(User);

module.exports = User;
