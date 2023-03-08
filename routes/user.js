/*
    Rutas de Usuarios
    host + /user
*/

const express = require("express");

const { getUsers } = require("../controllers/user");

const router = express.Router();

router.get("/getUsers", getUsers);

module.exports = router