const express = require("express");
const router = express.Router();

const siteRouter = require("../app/controllers/SiteController");

router.get("/", siteRouter.interface);

module.exports = router;
