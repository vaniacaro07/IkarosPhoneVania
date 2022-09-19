const express = require("express");
const router = express.Router();
const indexController = require("../../controllers/api/apiIndexController")

router.get("/", indexController.index)

module.exports = router;