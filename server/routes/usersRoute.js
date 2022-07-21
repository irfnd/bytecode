const router = require("express").Router();
const users = require("../controllers/usersController");

router.route("/").get(users.findAll).post(users.create);
router.route("/:id").get(users.findById).patch(users.update).delete(users.delete);

module.exports = router;
