const router = require("express").Router();
const { profile, skills, workExp } = require("../controllers");
const auth = require("../middlewares/authHandling");

router
  .route("/")
  .get(auth.userLogin, profile.getProfile)
  .patch(auth.userLogin, profile.updateProfile)
  .delete(auth.userLogin, profile.deleteProfile);
router
  .route("/skills")
  .get(auth.userLogin, auth.isCompany, skills.findByUser)
  .post(auth.userLogin, auth.isCompany, skills.createByUser);
router.route("/skills/:id").delete(auth.userLogin, auth.isCompany, skills.deleteByUser);
router
  .route("/work-exp")
  .get(auth.userLogin, auth.isCompany, workExp.findByUser)
  .post(auth.userLogin, auth.isCompany, workExp.createByUser);
router
  .route("/work-exp/:id")
  .patch(auth.userLogin, auth.isCompany, workExp.updateByUser)
  .delete(auth.userLogin, auth.isCompany, workExp.deleteByUser);

module.exports = router;
