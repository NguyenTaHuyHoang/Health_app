const express = require("express");
const router = express.Router();

const adminRouter = require("../app/controllers/AdminController");

//destroy routes
router.post('/destroyService/:id', adminRouter.destroyService);
router.post('/destroyClient/:id', adminRouter.destroyClient);
router.post('/destroyEmployee/:id', adminRouter.destroyEmployee);

//restore Routes
router.post('/restoreClient/:id', adminRouter.restoredClient);
router.post('/restoreEmployee/:id', adminRouter.restoredEmployee);
router.post('/restoreService/:id', adminRouter.restoredService);

// edit Routes
router.post('/editClient/:id', adminRouter.editClient);
router.post('/editEmployee/:id', adminRouter.editEmployee);
router.post('/editService/:id', adminRouter.editService);

// disable Routes
router.post('/disableClient', adminRouter.disableClient);
router.post('/disableEmployee', adminRouter.disableEmployee);
router.post('/removeService', adminRouter.removeService);

// update information routes
router.post('/:id/updateInformation', adminRouter.updateInformation);

//get API routes
router.get('/getAPI/services', adminRouter.getAPIService);
router.get('/getAPI/employees', adminRouter.getAPIEmployee);
router.get('/getAPI/clients', adminRouter.getAPIClient);

//add Routes
router.post('/add/service', adminRouter.addService);
router.post('/add/employee', adminRouter.addEmployee);
router.post('/add/Client', adminRouter.addClient);

// login and get interface routes
router.get('/checkAccount/:email/:password', adminRouter.apiCheckLogin);
router.post("/login", adminRouter.checkLogin);
router.post("/logout", adminRouter.logout);
router.get("/:id", adminRouter.interface);

module.exports = router;
