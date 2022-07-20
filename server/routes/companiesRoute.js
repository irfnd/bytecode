const router = require("express").Router();
const companiesController = require("../controllers/companies/companiesController");

router.route("/").get(companiesController.findAll).post(companiesController.create);
router
  .route("/:id")
  .get(companiesController.findById)
  .patch(companiesController.update)
  .delete(companiesController.delete);

module.exports = router;
