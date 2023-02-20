const { response } = require("express");
const Profile = require("../models/Profile");

const createProfiles = async (req, res = response) => {
  const { name } = req.body;

  try {
    let profile = await Profile.create(req.body);

    res.status(201).json({
      ok: true,
      id: profile.id,
    });
  } catch (error) {
    console.log("error new Profile ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  createProfiles
};
