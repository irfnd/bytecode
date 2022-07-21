const router = require("express").Router();
const skills = require("../controllers/skillsController");
const auth = require("../middlewares/authHandling");

router.route("/").get(auth.userLogin, skills.findByUser).post(auth.userLogin, skills.createByUser);
router.route("/:id").delete(auth.userLogin, skills.deleteByUser);

module.exports = router;
