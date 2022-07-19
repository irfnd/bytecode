const { Users } = require("../../models");

const usersAll = async (req, res, next) => {
  try {
    const results = await Users.findAll();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const userById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Users.findByPk(id);
    if (!results) throw new Error(JSON.stringify({ code: 404, message: "Data not found!" }));
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  usersAll,
  userById,
};
