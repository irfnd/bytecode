const status = require("http-status");
const { Companies } = require("../../models");

const CompaniesAll = async (req, res, next) => {
  try {
    const results = await Companies.findAll();
    if (results.length < 1) throw new Error("companies not found!", { cause: { code: status.NOT_FOUND } });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const CompaniesById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Companies.findByPk(id);
    if (results.length < 1) throw new Error("companies not found!", { cause: { code: status.NOT_FOUND } });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  CompaniesAll,
  CompaniesById,
};
