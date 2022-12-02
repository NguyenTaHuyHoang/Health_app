const Employee = require('../models/employee');
const mongooseHelper = require('../util/mongoose');
const Invoice = require('../models/invoice');
const employeeHelper = require('../util/employeeHelper');

const MedicalRecord = require('../models/medicalRecord');
const Appointment = require('../models/appointment');
class EmployeeController {
    // get interface
    // [GET] /employee
    async interface(req, res, next) {
        let obj;

        Invoice.find({}).then(
            invoice => {
                obj = mongooseHelper.multiMongooseToObject(invoice);
            }
        ).catch(next);

        const allAM = await Appointment.find();

        Employee.findOne({ _id: req.params.id }).then(employee => {
            let employee_  = mongooseHelper.mongoosesToObject(employee);

            let invoice = [];

            for (let i = 0; i < obj.length; i++) {
                if (obj[i].employee._id == req.params.id) {
                    invoice.push(obj[i]);
                }
            }

            let AM = [];
            for (let i = 0; i < allAM.length; i++) {
                if (allAM[i].employee.email == employee_.email) {
                    AM.push(allAM[i]);
                }
            }

            res.render("employee", {
                title: `Employee: ${req.params.id}`,
                employee: employee_,
                ListInvoice: employeeHelper.getListInvoice(invoice),
                ListAppointment: employeeHelper.getListAppointment(AM),
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
