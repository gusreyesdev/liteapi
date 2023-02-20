/*
    Rutas de Empresas
    host + /companies
*/

const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const { createCompanies, updateCompanies, deleteCompanies, getCompanies, getCompaniesByUser } = require("../controllers/companies");

const router = express.Router();

router.post(
  "/createCompany",
  [
    check("nit", "El nit es Obligatorio").not().isEmpty(),
    check("name", "El nombre es Obligatorio").not().isEmpty(),
    check("address", "La direccion es Obligatorio").not().isEmpty(),
    check("phone", "El telefono es Obligatorio").not().isEmpty(),
    check("UserId", "Dueño es Obligatorio").not().isEmpty(),
    validateFields,
  ],
  createCompanies
);

router.put(
  "/updateCompany/:nit",
  [
    check("name", "El nombre es Obligatorio").not().isEmpty(),
    check("address", "La direccion es Obligatorio").not().isEmpty(),
    check("phone", "El telefono es Obligatorio").not().isEmpty(),
    check("UserId", "Dueño es Obligatorio").not().isEmpty(),
    validateFields,
  ],
  updateCompanies
);

router.delete(
  "/deleteCompany/:nit",
  [
  ],
  deleteCompanies
);

router.get('/getCompanies', getCompanies);

router.get('/getCompaniesByUser/:id', getCompaniesByUser);


module.exports = router;
