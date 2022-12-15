const Admin = require('../models/admin');
const mongooseHelper = require('../util/mongoose');
const Client = require('../models/client');
const Employee = require('../models/employee');
const adminHelper = require('../util/adminHelper');
const Service = require('../models/service');
const employee = require('../models/employee');


class AdminController {
    // get interface
    //[GET] /admin
    async interface(req, res, next) {
        try {
            //https://img.icons8.com/metro/100/null/gender-neutral-user.png

            let Clients = mongooseHelper.multiMongooseToObject(await Client.find());
            let Employees = mongooseHelper.multiMongooseToObject(await Employee.find());
            let Services = mongooseHelper.multiMongooseToObject(await Service.find());
            let BinServices = mongooseHelper.multiMongooseToObject(await Service.findDeleted());
            let BinEmployees = mongooseHelper.multiMongooseToObject(await Employee.findDeleted());
            let BinClients = mongooseHelper.multiMongooseToObject(await Client.findDeleted());
            let ad = mongooseHelper.mongoosesToObject(await Admin.findOne({ _id: req.params.id }));
            res.render("admin", {
                title: `Admin: ${req.params.id}`,
                admin: ad,
                ListClient: adminHelper.getListClient(Clients, "notBin"),
                BinClient: adminHelper.getListClient(BinClients, "bin"),
                ListEmployee: adminHelper.getListEmployee(Employees, "notBin"),
                BinEmployee: adminHelper.getListEmployee(BinEmployees, "bin"),
                ListService: adminHelper.getListService(Services, "notBin"),
                BinService: adminHelper.getListService(BinServices, "bin"),
                numberClientDisable: BinClients.length,
                numberEmployeeDisable: BinEmployees.length,
                numberServiceDisable: BinServices.length,
                numberClient: Clients.length,
                numberEmployee: Employees.length,
                numberService: Services.length,
            });
        }
        catch (err) {
            next(err);
        }

    }

    // [POST] /admin/login
    checkLogin(req, res, next) {
        Admin.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(admin => {
            if (admin == null) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                let obj = mongooseHelper.mongoosesToObject(admin);
                res.redirect(`/admin/${obj._id}`);
            }
        })
            .catch(next);
    }

    // [POST] /admin/add/Client
    addClient(req, res, next) {
        console.log(req.body);
        const client = new Client(req.body);
        client.save();
    }

    // [POST] /admin/add/employee
    addEmployee(req, res, next) {
        console.log(req.body);
        const employee = new Employee(req.body);
        employee.save();
    }

    // [POST] /admin/add/employee
    addService(req, res, next) {
        console.log(req.body);
        const service = new Service(req.body);
        service.save();
    }

    // [GET] /getAPI/client
    async getAPIClient(req, res, next) {
        try {
            let Clients = mongooseHelper.multiMongooseToObject(await Client.find());
            res.send(Clients);
        }
        catch (err) {
            next(err);
        }
    }

    // [GET] /getAPI/employee
    async getAPIEmployee(req, res, next) {
        try {
            let Employees = mongooseHelper.multiMongooseToObject(await Employee.find());
            res.send(Employees);
        }
        catch (err) {
            next(err);
        }
    }

    // [GET] /getAPI/service
    async getAPIService(req, res, next) {
        try {
            let services = mongooseHelper.multiMongooseToObject(await Service.find());
            res.send(services);
        }
        catch (err) {
            next(err);
        }
    }

    //[POST] /admin/:id/updateInformation
    updateInformation(req, res, next) {
        // [PUT]    /curse/:id
        // this func after edit course
        Admin.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }


    //[POST] //admin/disableClient/
    disableClient(req, res, next) {
        console.log(req.body.id);
        Client.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    //[POST] //admin/disableEmployee/
    disableEmployee(req, res, next) {
        console.log(req.body.id);
        Employee.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    //[POST] //admin/removeService/
    removeService(req, res, next) {
        Service.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    //[POST] /admin/editService/:id
    editService(req, res, next) {
        console.log(req.body, req.params.id);
        Service.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/editEmployee/:id
    editEmployee(req, res, next) {
        Employee.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/editClient/:id
    editClient(req, res, next) {
        Client.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/restoreClient/:id
    restoredClient(req, res, next) {
        console.log("a");
        Client.restore({ _id: req.params.id })
            .then(() => console.log("Done restore " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/restoreEmployee/:id
    restoredEmployee(req, res, next) {
        console.log("b");
        Employee.restore({ _id: req.params.id })
            .then(() => console.log("Done restore " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/restoreService/:id
    restoredService(req, res, next) {
        console.log("c");
        Service.restore({ _id: req.params.id })
            .then(() => console.log("Done restore " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/destroyService/:id
    destroyService(req, res, next) {
        Service.deleteOne({ _id: req.params.id })
            .then(() => console.log("Done destroy " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/destroyClient/:id
    destroyClient(req, res, next) {
        Client.deleteOne({ _id: req.params.id })
            .then(() => console.log("Done destroy " + req.params.id))
            .catch(next);
    }

    //[POST] /admin/destroyEmployee/:id
    destroyEmployee(req, res, next) {
        Employee.deleteOne({ _id: req.params.id })
            .then(() => console.log("Done destroy " + req.params.id))
            .catch(next);
    }
}

module.exports = new AdminController();
