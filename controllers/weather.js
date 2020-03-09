const axios = require("axios");
exports.getDetailsByZipcode = async (req, res, next) => {
  try {
    const zipCodes = req.query.array;
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodes},us&appid=c805daf1994025480ae5e2b44ffe6a9b`
    );
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getWeatherByZipcode = async (req, res, next) => {
  try {
    const zipArray = req.body.array;
    let dataval = [];
    zipArray.forEach(async item => {
      dataval.push(
        new Promise(async (resolve, reject) => {
          const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?zip=${item},us&appid=c805daf1994025480ae5e2b44ffe6a9b`
          );
          if (response.err) {
            return reject(err);
          } else {
            resolve(response.data);
          }
        })
      );
    });
    Promise.all(dataval).then(resp => {
      res.status(200).send({ data: resp });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
