const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.post("/login", adminRouter.checkLogin);
router.get("/", adminRouter.interface);

module.exports = router;
