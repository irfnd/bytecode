const router = require("express").Router();
const usersController = require("../controllers/users");

router.route("/").get(usersController.get.users).post(usersController.post.user);
router
  .route("/:userId")
  .get(usersController.get.user)
  .patch(usersController.patch.user)
  .delete(usersController.delete.user);

module.exports = router;
