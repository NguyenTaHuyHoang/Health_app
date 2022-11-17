const Employee = require('../models/employee');

class EmployeeController {
    // get interface
    // [GET] /employee
    interface(req, res) {
        res.render("employee");
    }

    // [POST] /employee/login
    checkLogin(req, res, next) {
        Employee.find({
            email: req.body.email,
            password: req.body.password
        }).then(admin => {
            if (admin.length == 0) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                res.render('employee', {
                })
            }
        })
            .catch(next);
    }
}

module.exports = new EmployeeController();
