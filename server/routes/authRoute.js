const router = require("express").Router();
const authUsers = require("../controllers/authController");

router.route("/register").post(authUsers.register);
router.route("/login").post(authUsers.login);
router.route("/refresh-token").post(authUsers.refreshToken);

module.exports = router;
