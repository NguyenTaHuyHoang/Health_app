const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.get('/getAPI/employee', adminRouter.getAPIEmployee);
router.get('/getAPI/client', adminRouter.getAPIClient);
router.post('/add/employee', adminRouter.addEmployee);
router.post('/add/Client', adminRouter.addClient);
router.post("/login", adminRouter.checkLogin);
router.get("/:id", adminRouter.interface);

module.exports = router;
