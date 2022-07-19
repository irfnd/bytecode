const status = require("http-status");
const { Users } = require("../../models");

const usersAll = async (req, res, next) => {
  try {
    const results = await Users.findAll();
    if (results.length < 1) throw new Error("User not found!", { cause: { code: status.NOT_FOUND } });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const userById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Users.findByPk(id);
    if (results.length < 1) throw new Error("User not found!", { cause: { code: status.NOT_FOUND } });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  usersAll,
  userById,
};
