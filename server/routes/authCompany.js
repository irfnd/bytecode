const router = require("express").Router();
const Auth = require("../controllers/company/auth");
const Token = require("../controllers/company/refreshToken");

router.route("/register").post(Auth.Register);
router.route("/login").post(Auth.Login);
router.route("/token").post(Token.refreshToken);
router.route("/logout").delete(Auth.Logout);


module.exports = router;
