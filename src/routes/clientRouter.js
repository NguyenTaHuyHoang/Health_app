const express = require("express");
const router = express.Router();

const clientRouter = require("../app/controllers/ClientController");

// add appointment
router.post("/add/appointment", clientRouter.addAppointment);

//disable Event
router.post("/removeInvoice", clientRouter.removeInvoice);
router.post("/removeAppointment", clientRouter.removeAppointment);


//check Account
router.get("/checkAccount/:email/:password", clientRouter.apiCheckLogin);

//update information about
router.post("/:id/updateInformation", clientRouter.updateInformation);

// Route
router.post("/login", clientRouter.checkLogin);
router.post("/logout", clientRouter.logout);
router.get("/:id", clientRouter.interface);

module.exports = router;
