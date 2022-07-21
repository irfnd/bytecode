const { hashSync } = require("bcrypt");
const { Users } = require("../models");

// Admin Privilages
exports.create = async (req, res, next) => {
  const { password } = req.body;
  try {
    const newUser = { ...req.body, password: hashSync(password, 10) };
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
  const { password } = req.body;
  try {
    const updateUser = password ? { ...req.body, password: hashSync(password, 10) } : { ...req.body };
    const results = await Users.update(updateUser, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`User with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json(results[1][0]);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Users.destroy({ where: { id } });
    if (results < 1) throw new Error(`User with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json({ message: "User deleted successfully", request: id });
  } catch (error) {
    next(error);
  }
};
