const { hashSync } = require("bcrypt");
const { Users, UserProfile, CompanyProfile, Skills } = require("../models");

// User Privilages
exports.getProfile = async (req, res, next) => {
  const { type, id } = req.decoded;
  try {
    if (type !== "company") {
      const results = await Users.findByPk(id, { include: [UserProfile, { model: Skills, through: { attributes: [] } }] });
      if (!results) throw new Error("User not found!", { cause: "NOT_FOUND" });
      res.json(results);
    } else {
      const results = await Users.findByPk(id, { include: [CompanyProfile] });
      if (!results) throw new Error("Company not found!", { cause: "NOT_FOUND" });
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  const { type, id } = req.decoded;
  const { password } = req.body;
  try {
    if (type !== "company") {
      const newData = password ? { ...req.body, password: hashSync(password, 10) } : { ...req.body };
      const resultsUser = await Users.update(newData, { where: { id } });
      if (resultsUser < 1) throw new Error("User not registered!", { cause: "NOT_FOUND" });
      await UserProfile.update(newData, { where: { userId: id } });
      res.json({ message: "Profile updated successfully", request: req.body });
    } else {
      const newData = password ? { ...req.body, password: hashSync(password, 10) } : { ...req.body };
      const resultsCompany = await Users.update(newData, { where: { id } });
      if (resultsCompany < 1) throw new Error("User not registered!", { cause: "NOT_FOUND" });
      await CompanyProfile.update(newData, { where: { userId: id } });
      res.json({ message: "Profile updated successfully", request: req.body });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteProfile = async (req, res, next) => {
  const { id } = req.decoded;
  try {
    const results = await Users.destroy({ where: { id } });
    if (results < 1) throw new Error("Users not found!", { cause: "NOT_FOUND" });
    res.json({ message: "Account deleted successfully", request: id });
  } catch (error) {
    next(error);
  }
};
