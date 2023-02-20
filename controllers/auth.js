const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const newUser = async (req, res = response) => {
  const { name, email, password, ProfileId } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });

    if (user === null) {
      user = new User(req.body);

      /*encrypt password */
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(password, salt);

      user = await User.create(user.dataValues);

      res.status(201).json({
        ok: true,
        id: user.id,
      });

    } else {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }
  } catch (error) {
    console.log("error new User ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });

    if (user != null) {
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Contraseña incorrecta",
        });
      }

      res.status(201).json({
        ok: true,
        id: user.id,
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "Correo o Contraseña no son correctos",
      });
    }
  } catch (error) {
    console.log("error login", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  newUser,
  login,
};
