const status = require("http-status");
const { Users } = require("../../models");

const user = async (req, res, next) => {
  const { userId: id } = req.params;

  try {
    const results = await Users.destroy({ where: { id } });
    if (results < 1) throw new Error(`User with id ${id} not found!`, { cause: { code: status.BAD_REQUEST } });
    res.status(status.OK).json({ request: id });
  } catch (err) {
    next(err);
  }
};

module.exports = { user };
