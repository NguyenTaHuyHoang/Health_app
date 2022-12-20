const express = require("express");
const router = express.Router();

const employeeRouter = require("../app/controllers/EmployeeController");

// check account by API
router.get("/checkAccount/:email/:password", employeeRouter.apiCheckLogin);

//Normal route
router.post("/login", employeeRouter.checkLogin);
router.post("/logout", employeeRouter.logout);
router.get("/:id", employeeRouter.interface);

module.exports = router;
