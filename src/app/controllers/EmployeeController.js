const Employee = require('../models/employee');

class EmployeeController {
    // get interface
    // [GET] /employee
    interface(req, res, next) {
        res.render("employee", {
            title: `Client: ${req.params.id}`
        });
    }

    // [POST] /employee/login
    checkLogin(req, res, next) {
        Employee.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(employee => {
            if (employee.length == 0) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                res.redirect('/employee');
            }
        })
            .catch(next);
    }
}

module.exports = new EmployeeController();
