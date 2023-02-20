/*
    Rutas de Perfiles
    host + /profile
*/

const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const { createProfiles } = require("../controllers/profiles");

const router = express.Router();

router.post(
  "/createProfiles",
  [
    check("name", "El nombre es Obligatorio").not().isEmpty(),
    validateFields,
  ],
  createProfiles
);

module.exports = router;
