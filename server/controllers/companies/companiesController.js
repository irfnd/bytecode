const { hashSync } = require("bcrypt");
const { Companies } = require("../../models");

exports.create = async (req, res, next) => {
  try {
    const newCompany = { ...req.body, password: hashSync(req.body.password, 10) };
    const results = await Companies.create(newCompany);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const results = await Companies.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Companies.findByPk(id);
    if (!results) throw new Error("Company not found!", { cause: "NOT_FOUND" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateCompany = req.body.password
      ? { ...req.body, password: hashSync(req.body.password, 10) }
      : { ...req.body };
    const results = await Companies.update(updateCompany, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`Companies with id ${id} not found!`, { cause: "BAD_REQUEST" });
    res.json(results[1][0]);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Companies.destroy({ where: { id } });
    if (results < 1) throw new Error(`Company with id ${id} not found!`, { cause: "BAD_REQUEST" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};
