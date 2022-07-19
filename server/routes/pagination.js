const router = require("express").Router();
const search = require("../controllers/search/pagination");

router.route("/").get(search.getData);

module.exports = router;
