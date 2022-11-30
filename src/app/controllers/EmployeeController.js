const Employee = require('../models/employee');
const mongooseHelper = require('../util/mongoose');
const Invoice = require('../models/invoice');
const employeeHelper = require('../util/employeeHelper');
class EmployeeController {
    // get interface
    // [GET] /employee
    interface(req, res, next) {
        let obj;

        Invoice.find({}).then(
            invoice => {
                obj = mongooseHelper.multiMongooseToObject(invoice);
            }
        ).catch(next);

        Employee.findOne({ _id: req.params.id }).then(employee => {
            res.render("employee", {
                title: `Employee: ${req.params.id}`,
                employee: mongooseHelper.mongoosesToObject(employee),
                ListInvoice: employeeHelper.getListInvoice(obj),
                ListPatient: employeeHelper.getListPatient(),
                ListAppointment: employeeHelper.getListAppointment(),
            });
        })
            .catch(next);
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
