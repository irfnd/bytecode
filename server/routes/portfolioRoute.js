const router = require("express").Router();
const { portfolio } = require("../controllers");

router.route("/").get(portfolio.findAll).post(portfolio.create);
router.route("/:id").get(portfolio.findById).patch(portfolio.update).delete(portfolio.deleteOne);

module.exports = router;
