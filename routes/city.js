const express = require("express");
const data = require("../city.json");

const cities = require("../controllers/cities");

const router = express.Router();

router.get("/cities", cities.getCities);

router.get("/cities/:cityId", cities.getCity);

module.exports = router;
