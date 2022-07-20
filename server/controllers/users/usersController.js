const { hashSync } = require("bcrypt");
const { Users } = require("../../models");

exports.create = async (req, res, next) => {
  try {
    const newUser = { ...req.body, password: hashSync(req.body.password, 10) };
    const results = await Users.create(newUser);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const results = await Users.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Users.findByPk(id);
    if (!results) throw new Error("User not found!", { cause: "NOT_FOUND" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateUser = req.body.password ? { ...req.body, password: hashSync(req.body.password, 10) } : { ...req.body };
    const results = await Users.update(updateUser, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`User with id ${id} not found!`, { cause: "BAD_REQUEST" });
    res.json(results[1][0]);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Users.destroy({ where: { id } });
    if (results < 1) throw new Error(`User with id ${id} not found!`, { cause: "BAD_REQUEST" });
    res.json({ request: id });
  } catch (error) {
    next(error);
  }
};
