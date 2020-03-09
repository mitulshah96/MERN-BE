const data = require(".././city.json");

exports.getCities = (req, res, next) => {
  try {
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getCity = (req, res, next) => {
  const cityId = req.params.cityId;
  try {
    const city = data.filter(item => item.id === Number(cityId));
    res.status(200).json({ data: city });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
