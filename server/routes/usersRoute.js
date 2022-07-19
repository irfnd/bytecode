const router = require("express").Router();
const usersController = require("../controllers/users");

router.route("/").get(usersController.get.usersAll).post();

module.exports = router;
