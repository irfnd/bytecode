const status = require("http-status");
const { hashSync } = require("bcrypt");
const { Users } = require("../../models");

const user = async (req, res, next) => {
  try {
    const newUser = { ...req.body, password: hashSync(req.body.password, 10) };
    const results = await Users.create(newUser);
    res.status(status.OK).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = { user };
