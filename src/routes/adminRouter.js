const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.get('/getAPI/client', adminRouter.getAPIClient);
router.post('/add/Client', adminRouter.addClient);
router.post("/login", adminRouter.checkLogin);
router.get("/:id", adminRouter.interface);

module.exports = router;
