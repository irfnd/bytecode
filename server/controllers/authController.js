require("dotenv").config();
const { REFRESH_TOKEN_EXPIRE } = process.env;

const { hashSync, compareSync } = require("bcrypt");
const { Users, UserProfile, CompanyProfile, Tokens } = require("../models");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../utils/TokenHandling");

// Public Privilages
exports.register = async (req, res, next) => {
  const { type, password } = req.body;
  try {
    if (!type) throw new Error("User type required!", { cause: "BAD_REQUEST" });
    if (type !== "company") {
      const newUser = { ...req.body, password: hashSync(password, 10) };
      const results = await Users.create(newUser);
      await UserProfile.create({ ...newUser, userId: results.id });
    } else {
      const newUser = { ...req.body, password: hashSync(password, 10) };
      const results = await Users.create(newUser);
      await CompanyProfile.create({ ...newUser, userId: results.id });
    }
    res.clearCookie("refreshToken").json({ message: "Register successfully" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) throw new Error("Invalid email!", { cause: "UNAUTHORIZED" });
    const passwordMatch = compareSync(password, user.password);
    if (!passwordMatch) throw new Error("Invalid password!", { cause: "UNAUTHORIZED" });
    const payload = { id: user.id, name: user.name, email: user.email, type: user.type };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    await Tokens.create({ userId: payload.id, token: refreshToken });
    res
      .cookie("refreshToken", refreshToken, { httpOnly: true, REFRESH_TOKEN_EXPIRE })
      .json({ ...payload, token: accessToken });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) throw new Error("Token required!", { cause: "UNAUTHORIZED" });
    const checkToken = await Tokens.findOne({ where: { token: refreshToken } });
    if (!checkToken) throw new Error("Invalid token!", { cause: "UNAUTHORIZED" });
    const decoded = await verifyRefreshToken(refreshToken);
    const payload = { id: decoded.id, name: decoded.name, email: decoded.email, type: decoded.type };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);
    await Tokens.update({ token: newRefreshToken }, { where: { userId: payload.id, token: refreshToken } });
    res
      .clearCookie("refreshToken")
      .cookie("refreshToken", newRefreshToken, { httpOnly: true, REFRESH_TOKEN_EXPIRE })
      .json({ ...payload, tokens: newAccessToken });
  } catch (error) {
    next(error);
  }
};
