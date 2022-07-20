const router = require("express").Router();
const authCompanies = require("../controllers/companies/authController");
const authUsers = require("../controllers/users/authController");

router.route("/users/register").post(authUsers.register);
router.route("/users/login").post(authUsers.login);
router.route("/users/refresh-token").post(authUsers.refreshToken);
router.route("/companies/register").post(authCompanies.register);
router.route("/companies/login").post(authCompanies.login);
router.route("/companies/refresh-token").post(authCompanies.refreshToken);

module.exports = router;
