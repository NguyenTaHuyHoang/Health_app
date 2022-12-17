const express = require("express");
const router = express.Router();

const clientRouter = require("../app/controllers/ClientController");

// Route
router.post("/:email:password", clientRouter.apiCheckLogin);
router.post("/login", clientRouter.checkLogin);
router.get("/:id", clientRouter.interface);

module.exports = router;
