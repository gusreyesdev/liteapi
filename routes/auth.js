/*
    Rutas de Usuarios / Auth
    host + /auth
*/

const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const { newUser, login } = require("../controllers/auth");

const router = express.Router();

router.post(
  "/newUser",
  [
    check("name", "El nombre es Obligatorio").not().isEmpty(),
    check("email", "El correo es Obligatorio").not().isEmpty(),
    check("password", "La contraseña es Obligatoria").not().isEmpty(),
    check("ProfileId", "El tipo de cuenta es Obligatoria").not().isEmpty(),
    validateFields,
  ],
  newUser
);

router.post(
  "/login",
  [
    check("email", "El correo es Obligatorio").not().isEmpty(),
    check("password", "La contraseña es Obligatoria").not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
