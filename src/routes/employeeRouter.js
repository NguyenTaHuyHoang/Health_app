const express = require("express");
const router = express.Router();

const employeeRouter = require("../app/controllers/EmployeeController");

//add appointment
router.post("/add/appointment", employeeRouter.addAppointment);

//disable Event
router.post("/removeInvoice", employeeRouter.removeInvoice);
router.post("/removeAppointment", employeeRouter.removeAppointment);

//change Info
router.post("/:id/updateInformation", employeeRouter.updateInformation);

// check account by API
router.get("/checkAccount/:email/:password", employeeRouter.apiCheckLogin);

//Normal route
router.post("/login", employeeRouter.checkLogin);
router.post("/logout", employeeRouter.logout);
router.get("/:id", employeeRouter.interface);

module.exports = router;
