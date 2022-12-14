const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

router.post('/editClient/:id', adminRouter.editClient);
router.post('/editEmployee/:id', adminRouter.editEmployee);
router.post('/editService/:id', adminRouter.editService);
router.post('/disableClient', adminRouter.disableClient);
router.post('/disableEmployee', adminRouter.disableEmployee);
router.post('/removeService', adminRouter.removeService);
router.post('/:id/updateInformation', adminRouter.updateInformation);
router.get('/getAPI/services', adminRouter.getAPIService);
router.get('/getAPI/employees', adminRouter.getAPIEmployee);
router.get('/getAPI/clients', adminRouter.getAPIClient);
router.post('/add/service', adminRouter.addService);
router.post('/add/employee', adminRouter.addEmployee);
router.post('/add/Client', adminRouter.addClient);
router.post("/login", adminRouter.checkLogin);
router.get("/:id", adminRouter.interface);

module.exports = router;
