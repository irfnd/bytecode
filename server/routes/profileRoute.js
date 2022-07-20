const router = require("express").Router();
const profile = require("../controllers/profileController");
const skills = require("../controllers/skillsController");
const auth = require("../middlewares/authHandling");

router
  .route("/")
  .get(auth.userLogin, profile.getProfile)
  .patch(auth.userLogin, profile.updateProfile)
  .delete(auth.userLogin, profile.deleteProfile);
router.route("/skills").get(auth.userLogin, skills.findByUser).post(auth.userLogin, skills.createByUser);
router.route("/skills/:id").delete(auth.userLogin, skills.deleteByUser);

module.exports = router;
