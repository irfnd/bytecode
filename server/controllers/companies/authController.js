require("dotenv").config();
const { REFRESH_TOKEN_EXPIRE } = process.env;

const { hashSync, compareSync } = require("bcrypt");
const { Companies, Tokens } = require("../../models");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../../utils/TokenHandling");

exports.register = async (req, res, next) => {
  try {
    const newCompany = { ...req.body, password: hashSync(req.body.password, 10) };
    await Companies.create(newCompany);
    res.json({ message: "Register successfully" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const company = await Companies.findOne({ where: { email } });
    if (!company) throw new Error("Invalid email!", { cause: "UNAUTHORIZED" });
    const passwordMatch = compareSync(password, company.password);
    if (!passwordMatch) throw new Error("Invalid password!", { cause: "UNAUTHORIZED" });
    const payload = {
      id: company.id,
      name: company.name,
      companyName: company.companyName,
      email: company.email,
    };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    await Tokens.create({ companyId: payload.id, token: refreshToken });
    res
      .cookie("refreshToken", refreshToken, { httpOnly: true, REFRESH_TOKEN_EXPIRE })
      .json({ ...payload, token: { accessToken } });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw new Error("Token required!", { cause: "UNAUTHORIZED" });
    const checkToken = await Tokens.findOne({ where: { token: refreshToken } });
    if (!checkToken) throw new Error("Invalid token!", { cause: "FORBIDDEN" });
    const decoded = await verifyRefreshToken(refreshToken);
    const payload = { id: decoded.id, name: decoded.name, companyName: decoded.companyName, email: decoded.email };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);
    await Tokens.update({ token: newRefreshToken }, { where: { companyId: payload.id, token: refreshToken } });
    res
      .clearCookie("refreshToken")
      .cookie("refreshToken", newRefreshToken, { httpOnly: true, REFRESH_TOKEN_EXPIRE })
      .json({ ...payload, tokens: { accessToken: newAccessToken } });
  } catch (error) {
    next(error);
  }
};
