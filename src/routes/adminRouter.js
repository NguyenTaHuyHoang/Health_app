const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.get('/getAPI/services', adminRouter.getAPIService);
router.get('/getAPI/employees', adminRouter.getAPIEmployee);
router.get('/getAPI/clients', adminRouter.getAPIClient);
router.post('/add/service', adminRouter.addService);
router.post('/add/employee', adminRouter.addEmployee);
router.post('/add/Client', adminRouter.addClient);
router.post("/login", adminRouter.checkLogin);
router.get("/:id", adminRouter.interface);

module.exports = router;
