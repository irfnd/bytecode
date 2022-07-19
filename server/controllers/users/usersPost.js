const { hashSync } = require("bcrypt");
const { Users } = require("../../models");

const oneUser = async (req, res, next) => {
  try {
    const newUser = { ...req.body, password: hashSync(req.body.password, 10) };
    const results = await Users.create(newUser);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  oneUser,
};
