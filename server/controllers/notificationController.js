const { Notifications } = require("../models");

const create = async (req, res, next) => {
  try {
    const results = await Notifications.create(req.body);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const results = await Notifications.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    // const roomChat = `${req.protocol}://${req.get('host')}${req.baseUrl};`
    // used when there is already a chat client route
    const results = await Notifications.findByPk(id);
    if (!results) throw new Error(`Notification ${id} not found`, { cause: "NOT_FOUND" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Notifications.destroy({ where: { id } });
    if (results < 1) throw new Error(`Notification with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json({ message: `Notification with id ${id} deleted successfully`, request: id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  deleteOne,
};
