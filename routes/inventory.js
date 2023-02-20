/*
    Rutas de Empresas
    host + /inventory
*/

const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const { createItem, getItemByCompany } = require("../controllers/inventory");

const router = express.Router();

router.post(
  "/createItem",
  [check("name", "El nombre es Obligatorio").not().isEmpty(), validateFields],
  createItem
);

router.get('/getItemByCompany/:nit', getItemByCompany);


module.exports = router;
