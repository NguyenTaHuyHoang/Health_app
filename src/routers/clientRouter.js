const express = require("express");
const router = express.Router();

const clientRouter = require("../app/controllers/ClientController");

router.get("/", clientRouter.interface);

module.exports = router;
