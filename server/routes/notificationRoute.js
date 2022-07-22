const router = require("express").Router();
const Notification = require("../controllers/notificationController");

router.route("/").post(Notification.create).get(Notification.findAll);
router.route("/:id").delete(Notification.deleteOne).get(Notification.findById);

module.exports = router;
