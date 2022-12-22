const Employee = require('../models/employee');
const mongooseHelper = require('../util/mongoose');
const Invoice = require('../models/invoice');
const employeeHelper = require('../util/employeeHelper');

const Service = require('../models/service');
const MedicalRecord = require('../models/medicalRecord');
const Appointment = require('../models/appointment');
class EmployeeController {
    // get interface
    // [GET] /employee
    async interface(req, res, next) {
        try {
            if (!req.session.uidEmployee) return res.redirect('/login');

            let obj = mongooseHelper.multiMongooseToObject(await Invoice.find({}));
            const allAM = mongooseHelper.multiMongooseToObject(await Appointment.find());
            const employee_ = mongooseHelper.mongoosesToObject(await Employee.findOne({ _id: req.params.id }));
            const services = mongooseHelper.multiMongooseToObject(await Service.find());

            //import InvoiceRemove and AP remove
            let allInvoiceRM = mongooseHelper.multiMongooseToObject(await Invoice.findDeleted({}));
            let allAppointmentRM = mongooseHelper.multiMongooseToObject(await Appointment.findDeleted());

            let invoice = [];

            for (let i = 0; i < obj.length; i++) {
                if (obj[i].employee.email == employee_.email) {
                    invoice.push(obj[i]);
                }
            }

            let AM = [];
            for (let i = 0; i < allAM.length; i++) {
                if (allAM[i].employee.email == employee_.email) {
                    AM.push(allAM[i]);
                }
            }

            //filter list invoice and appointment is deleted
            let invoiceRM = [];
            let appointmentRM = [];
            for (let i = 0; i < allInvoiceRM.length; i++) {
                if (allInvoiceRM[i].employee.email == employee_.email) {
                    invoiceRM.push(allInvoiceRM[i]);
                }
            }

            for (let i = 0; i < allAppointmentRM.length; i++) {
                if (allAppointmentRM[i].employee.email == employee_.email) {
                    appointmentRM.push(allAppointmentRM[i]);
                }
            }

            res.render("employee", {
                title: `Employee: ${req.params.id}`,
                employee: employee_,
                ListInvoice: employeeHelper.getListInvoice(invoice, "notBin"),
                ListAppointment: employeeHelper.getListAppointment(AM, "notBin"),
                listService: employeeHelper.getListService(services),
                BinAppointment: employeeHelper.getListAppointment(appointmentRM, "Bin"),
                BinInvoice: employeeHelper.getListInvoice(invoiceRM, "Bin"),
                numberAppointmentRemove: appointmentRM.length,
                numberAppointment: AM.length,
                numberInvoiceRemove: invoiceRM.length,
                numberInvoice: invoice.length,
            });
        }
        catch (err) {
            next(err);
        }
    }

    //[POST] /employee/logout
    logout(req, res, next) {
        delete req.session.uidEmployee;
        res.redirect('/');
    }

    // [POST] /employee/login
    async checkLogin(req, res, next) {
        // Check this account is remove?
        const isRemove = mongooseHelper.mongoosesToObject(await Employee.findOneDeleted({
            email: req.body.email,
        }));

        // if not remove check 
        const employee = mongooseHelper.mongoosesToObject(await Employee.findOne({
            email: req.body.email,
        }));

        if (isRemove != null)
            return res.render('login', {
                notification: "Tài khoản này đã bị vô hiệu hóa!",
            })

        if (employee == null)
            return res.render('login', {
                notification: "Nhập sai email!",
            })
        if (req.body.password != employee.password)
            return res.render('login', {
                notification: "Nhập sai mật khẩu!",
            })

        req.session.uidEmployee = employee._id;
        res.redirect(`/employee/${employee._id}`);
    }

    //[GET] employee/:email/:password
    async apiCheckLogin(req, res, next) {
        const employee = mongooseHelper.mongoosesToObject(await Employee.findOne({
            email: req.params.email,
        }));
        if (employee == null)
            return res.send({
                result: false,
                notification: "Nhập sai tài khoản!",
            });
        if (req.params.password != employee.password) res.send({
            result: false,
            notification: "Nhập sai mật khẩu!",
        });
        return res.send({
            result: true,
        });

    }

    //[POST] /employee/:id/updateInformation
    updateInformation(req, res, next) {
        // [PUT]    /curse/:id
        // this func after edit course
        Employee.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }

    //[POST] /employee/disableInvoice
    removeInvoice(req, res, next) {
        Invoice.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    //[POST] //employee/disableAppointment/
    removeAppointment(req, res, next) {
        Appointment.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    // [POST] /employee/add/Appointment
    addAppointment(req, res, next) {
        const ap = new Appointment(req.body);
        ap.save();
    }

    // [POST] /employee/add/Invoice
    addInvoice(req, res, next) {
        const iv = new Invoice(req.body);
        iv.save();
    }
}

module.exports = new EmployeeController();
