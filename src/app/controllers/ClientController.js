const Client = require('../models/client');
const mongooseHelper = require('../util/mongoose');
const clientHelper = require('../util/clientHelper');
const Invoice = require('../models/invoice');

class ClientController {
    // get interface
    //[GET] /client
    interface(req, res, next) {

        let obj;

        Invoice.find({}).then(
            invoice => {
                obj = mongooseHelper.multiMongooseToObject(invoice);
            }
        ).catch(next);

        Client.findOne({ _id: req.params.id }).then(client => {
            res.render("client", {
                title: `Client: ${req.params.id}`,
                client: mongooseHelper.mongoosesToObject(client),
                ListInvoice: clientHelper.getListInvoice(obj),
                ListPatient: clientHelper.getListPatient(),
                ListAppointment: clientHelper.getListAppointment(),
            });
        })
            .catch(next);
    }

    // [POST] /client/login
    checkLogin(req, res, next) {
        Client.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(client => {
            if (client == null) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                let obj = mongooseHelper.mongoosesToObject(client);
                console.log(obj);
                let id = obj._id;
                res.redirect(`/client/${id}`);
            }
        })
            .catch(next);
    }
}

module.exports = new ClientController();
