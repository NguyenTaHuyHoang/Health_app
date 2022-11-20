const express = require("express");
const router = express.Router();

const clientRouter = require("../app/controllers/ClientController");

router.post("/login", clientRouter.checkLogin);
router.get("/:id", clientRouter.interface);

module.exports = router;
