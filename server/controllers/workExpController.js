const moment = require("moment");
const { Users, Companies, CompanyProfile, WorkExp } = require("../models");

// Admin Privilages
exports.create = async (req, res, next) => {
  try {
    const results = await WorkExp.create(req.body);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const results = await WorkExp.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await WorkExp.findByPk(id);
    if (!results) throw new Error("Work experience not found!", { cause: "NOT_FOUND" });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await WorkExp.update(req.body, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`Work experience with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json(results[1][0]);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await WorkExp.destroy({ where: { id } });
    if (results < 1) throw new Error(`Work experience with id ${id} not found!`, { cause: "NOT_FOUND" });
    res.json({ message: "Work experience deleted successfully", request: id });
  } catch (error) {
    next(error);
  }
};

// User Privilages
exports.createByUser = async (req, res, next) => {
  const { id } = req.decoded;
  const { name } = req.body;
  try {
    const results = await Users.findOne({ where: { id } });
    if (!results) throw new Error("User not found!", { cause: "NOT_FOUND" });
    const getProfile = await CompanyProfile.findOne({ where: { name } });
    const newCompany = await Companies.create({ name, companyProfileId: getProfile?.id });
    await WorkExp.create({ ...req.body, userId: id, companyId: newCompany.id });
    res.json(newCompany);
  } catch (error) {
    next(error);
  }
};

exports.findByUser = async (req, res, next) => {
  const { id } = req.decoded;
  try {
    const results = await Users.findOne({ include: [{ model: Companies }], where: { id } });
    if (!results) throw new Error("User not found!", { cause: "NOT_FOUND" });
    res.json(results?.companies);
  } catch (error) {
    next(error);
  }
};

exports.updateByUser = async (req, res, next) => {
  const { id: userId } = req.decoded;
  const { id: companyId } = req.params;
  const { name } = req.body;
  try {
    const results = await Users.findOne({ where: { id: userId } });
    if (!results) throw new Error("User not found!", { cause: "NOT_FOUND" });
    const getCompany = await Companies.update({ name }, { where: { id: companyId } });
    await WorkExp.update({ ...req.body, name: getCompany.name, companyId: getCompany.id }, { where: { userId, companyId } });
    res.json({ message: "Work experience updated successfully", request: req.body });
  } catch (error) {
    next(error);
  }
};

exports.deleteByUser = async (req, res, next) => {
  const { id: userId } = req.decoded;
  const { id: companyId } = req.params;
  try {
    const results = await Companies.destroy({ where: { id: companyId } });
    if (results < 1) throw new Error("User not found!", { cause: "NOT_FOUND" });
    await WorkExp.destroy({ where: { userId, companyId } });
    res.json({ message: "Work experience deleted successfully", request: companyId });
  } catch (error) {
    next(error);
  }
};
