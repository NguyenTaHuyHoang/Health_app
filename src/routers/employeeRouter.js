const express = require("express");
const router = express.Router();

const employeeRouter = require("../app/controllers/EmployeeController");

router.get("/", employeeRouter.interface);

module.exports = router;
