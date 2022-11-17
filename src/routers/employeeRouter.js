const express = require("express");
const router = express.Router();

const employeeRouter = require("../app/controllers/EmployeeController");

router.post("/login", employeeRouter.checkLogin);
router.get("/", employeeRouter.interface);

module.exports = router;
