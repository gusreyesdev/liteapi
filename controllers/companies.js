const { response } = require("express");
const Company = require("../models/Company");

const createCompanies = async (req, res = response) => {
  const { nit, name, address, phone, UserId } = req.body;

  try {
    let company = await Company.findOne({ where: { nit: nit } });

    if (company === null) {
      company = new Company(req.body);

      company = await Company.create(company.dataValues);

      res.status(201).json({
        ok: true,
        nit: company.nit,
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "La empresa ya existe",
      });
    }
    
  } catch (error) {
    console.log("error create companies ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const updateCompanies = async (req, res = response) => {
  const { nit } = req.params;

  const { name, address, phone, UserId } = req.body;

  try {
    let company = await Company.findOne({ where: { nit: nit } });

    if (company != null) {
      company = new Company({
        nit: nit,
        name: name,
        address: address,
        phone: phone,
        UserId: UserId,
      });

      company = await Company.update(company.dataValues, {
        where: {
          nit: nit,
        },
      });

      res.status(201).json({
        ok: true,
        msg: "Empresa Actualizada",
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "La empresa no existe",
      });
    }
  } catch (error) {
    console.log("error update companies ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const deleteCompanies = async (req, res = response) => {
  const { nit } = req.params;

  try {
    let company = await Company.findOne({ where: { nit: nit } });

    if (company != null) {
      company = await Company.destroy({
        where: {
          nit: nit,
        },
      });

      res.status(201).json({
        ok: true,
        msg: "Empresa Eliminada",
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "La empresa no existe",
      });
    }
  } catch (error) {
    console.log("error delete companies ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const getCompanies = async (req, res = response) => {
  try {
    let company = await Company.findAll();

    res.status(201).json({
      ok: true,
      company,
    });
  } catch (error) {
    console.log("error get all companies ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const getCompaniesByUser = async (req, res = response) => {
  const { id } = req.params;

  try {
    let company = await Company.findAll({
      where: {
        UserId: id,
      },
    });

    res.status(201).json({
      ok: true,
      company,
    });
  } catch (error) {
    console.log("error get all companies by user ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  createCompanies,
  updateCompanies,
  deleteCompanies,
  getCompanies,
  getCompaniesByUser,
};
