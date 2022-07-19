const { hashSync } = require("bcrypt");
const { Companies } = require("../../models");

const company = async (req, res, next) => {
  try {
    console.log(req.body)
    const newCompany = { ...req.body, password: hashSync(req.body.password, 10) };
    const results = await Companies.create(newCompany);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  company,
};
