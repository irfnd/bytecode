const router = require("express").Router();
const companyController = require("../controllers/company/compControll");

router.route("/").get(companyController.findAll).post(companyController.insert);
router
  .route("/:id")
  .get(companyController.findId)
  .patch(companyController.update)
  .delete(companyController.delete);

module.exports = router;
