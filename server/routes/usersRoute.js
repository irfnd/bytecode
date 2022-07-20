const router = require("express").Router();
const usersController = require("../controllers/users/usersController");

router.route("/").get(usersController.findAll).post(usersController.create);
router.route("/:id").get(usersController.findById).patch(usersController.update).delete(usersController.delete);

module.exports = router;
