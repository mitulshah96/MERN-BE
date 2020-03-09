const express = require("express");

const weather = require("../controllers/weather");

const router = express.Router();

router.get("/weather", weather.getDetailsByZipcode);

router.post("/weather", weather.getWeatherByZipcode);

module.exports = router;
