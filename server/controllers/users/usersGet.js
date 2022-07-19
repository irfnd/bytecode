const status = require("http-status");
const { Users } = require("../../models");

const users = async (req, res) => {
  const results = await Users.findAll();
  res.status(status.OK).json(results);
};

const user = async (req, res, next) => {
  const { userId: id } = req.params;
  try {
    const results = await Users.findByPk(id);
    if (!results) throw new Error("User not found!", { cause: { code: status.NOT_FOUND } });
    res.status(status.OK).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = { users, user };
