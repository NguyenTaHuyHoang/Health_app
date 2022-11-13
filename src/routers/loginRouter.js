const express = require("express");
const router = express.Router();

const loginRouter = require("../app/controllers/LoginController");

router.get("/", loginRouter.interface);

module.exports = router;
