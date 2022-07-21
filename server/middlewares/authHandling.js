const { verifyAccessToken } = require("../utils/TokenHandling");

exports.userLogin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (!token) throw new Error("Token required!", { cause: "UNAUTHORIZED" });
    const decoded = await verifyAccessToken(token);
    req.decoded = { id: decoded.id, name: decoded.name, email: decoded.email, type: decoded.type };
    next();
  } catch (error) {
    next(error);
  }
};
