require("dotenv").config();
const { REFRESH_TOKEN_EXPIRE } = process.env;

const { hashSync, compareSync } = require("bcrypt");
const { Users, Tokens } = require("../../models");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../../utils/TokenHandling");

exports.register = async (req, res, next) => {
  try {
    const newUser = { ...req.body, password: hashSync(req.body.password, 10) };
    await Users.create(newUser);
    res.json({ message: "Register successfully" });
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
    const payload = { id: user.id, name: user.name, email: user.email };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    await Tokens.create({ userId: payload.id, token: refreshToken });
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
    const payload = { id: decoded.id, name: decoded.name, email: decoded.email };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);
    await Tokens.update({ token: newRefreshToken }, { where: { userId: payload.id, token: refreshToken } });
    res
      .clearCookie("refreshToken")
      .cookie("refreshToken", newRefreshToken, { httpOnly: true, REFRESH_TOKEN_EXPIRE })
      .json({ ...payload, tokens: { accessToken: newAccessToken } });
  } catch (error) {
    next(error);
  }
};
