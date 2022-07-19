const router = require("express").Router();
const companyController = require("../controllers/company/index");

router.route("/").get(companyController.get.CompaniesAll)
router.route("/add").post(companyController.post.company);

module.exports = router;
