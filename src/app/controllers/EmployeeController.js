class EmployeeController {
    // get interface
    interface(req, res) {
        res.render("employee");
    }
}

module.exports = new EmployeeController();
