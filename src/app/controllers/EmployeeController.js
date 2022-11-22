const Employee = require('../models/employee');
const mongooseHelper = require('../util/mongoose');

class EmployeeController {
    // get interface
    // [GET] /employee
    interface(req, res, next) {
        res.render("employee", {
            title: `Employee: ${req.params.id}`
        });
    }

    // [POST] /employee/login
    checkLogin(req, res, next) {
        Employee.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(employee => {
            if (employee == null) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                let obj = mongooseHelper.mongoosesToObject(employee);
                let id = obj._id;
                res.redirect(`/employee/${id}`);
            }
        })
            .catch(next);
    }
}

module.exports = new EmployeeController();
