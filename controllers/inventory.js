const { response } = require("express");
const Inventory = require("../models/Inventory");

const createItem = async (req, res = response) => {
  const { name } = req.body;

  try {
    let item = await Inventory.findOne({ where: { name: name } });

    if (item === null) {
      item = new Inventory(req.body);

      item = await Inventory.create(item.dataValues);

      res.status(201).json({
        ok: true,
        id: item.id,
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "El articulo ya existe",
      });
    }
  } catch (error) {
    console.log("error create item ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const getItemByCompany = async (req, res = response) => {
  const { nit } = req.params;

  try {

    let item = await Inventory.findAll({
      where: {
        CompanyNit: nit,
      },
    });

    res.status(201).json({
      ok: true,
      item,
    });
    
  } catch (error) {
    console.log("error get item by company ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  createItem,
  getItemByCompany,
};
