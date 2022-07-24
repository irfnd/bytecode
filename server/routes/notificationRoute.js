const router = require("express").Router();
const { notification } = require("../controllers");

router.route("/").post(notification.create).get(notification.findAll);
router.route("/:id").delete(notification.deleteOne).get(notification.findById);

module.exports = router;
