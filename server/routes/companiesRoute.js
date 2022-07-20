const router = require("express").Router();
const companies = require("../controllers/companies/companiesController");

router.route("/").get(companies.findAll).post(companies.create);
router.route("/:id").get(companies.findById).patch(companies.update).delete(companies.delete);

module.exports = router;
