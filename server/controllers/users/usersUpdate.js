const status = require("http-status");
const { hashSync } = require("bcrypt");
const { Users } = require("../../models");

const user = async (req, res, next) => {
  const { userId: id } = req.params;
  try {
    const updateUser = req.body.password ? { ...req.body, password: hashSync(req.body.password, 10) } : { ...req.body };
    const results = await Users.update(updateUser, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`User with id ${id} not found!`, { cause: { code: status.BAD_REQUEST } });
    res.status(status.OK).json(results[1][0]);
  } catch (err) {
    next(err);
  }
};

module.exports = { user };
