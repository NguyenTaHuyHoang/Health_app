const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.get("/", adminRouter.interface);

module.exports = router;
