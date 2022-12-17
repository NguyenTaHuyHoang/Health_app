const express = require("express");
const router = express.Router();

const employeeRouter = require("../app/controllers/EmployeeController");


//Normal route
router.post("/:email/:password", employeeRouter.apiCheckLogin);
router.post("/login", employeeRouter.checkLogin);
router.get("/:id", employeeRouter.interface);

module.exports = router;
