const { response } = require("express");
const User = require("../models/User");

const getUsers = async (req, res = response) => {
  try {
    let user = await User.findAll({attributes:['name','id']});

    res.status(201).json({
      ok: true,
      user
    });
  } catch (error) {
    console.log("error get all users ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  getUsers,
};
