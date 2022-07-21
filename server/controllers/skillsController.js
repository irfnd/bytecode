const { Users, Skills, UserSkills } = require("../models");

// Admin Privilages
exports.create = async (req, res, next) => {
  try {
    const results = await Skills.create(req.body);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const results = await Skills.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Skills.findByPk(id);
    if (!results) throw new Error("Skill not found!", { cause: "NOT_FOUND" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Skills.update(req.body, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`Skill with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json(results[1][0]);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Skills.destroy({ where: { id } });
    if (results < 1) throw new Error(`Skill with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json({ message: "Skill deleted successfully", request: id });
  } catch (error) {
    next(error);
  }
};

// User Privilages
exports.createByUser = async (req, res, next) => {
  const { id } = req.decoded;
  const { name } = req.body;
  try {
    const [result, _] = await Skills.findOrCreate({ where: { name } });
    await UserSkills.create({ userId: id, skillId: result.id });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.findByUser = async (req, res, next) => {
  const { id } = req.decoded;
  try {
    const results = await Skills.findAll({
      include: [{ model: Users, attributes: [], where: { id } }],
    });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.deleteByUser = async (req, res, next) => {
  const { id: userId } = req.decoded;
  const { id: skillId } = req.params;
  try {
    await UserSkills.destroy({ where: { userId, skillId } });
    res.json({ message: "Skill deleted successfully", request: skillId });
  } catch (error) {
    next(error);
  }
};
