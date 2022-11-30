const Client = require('../models/client');
const mongooseHelper = require('../util/mongoose');

const clientHelper = require('../util/clientHelper');
const Invoice = require('../models/invoice');
const MedicalRecord = require('../models/medicalRecord');
const Appointment = require('../models/appointment');

class ClientController {
    // get interface
    //[GET] /client
    async interface(req, res, next) {

        let obj;

        Invoice.find({}).then(
            invoice => {
                obj = mongooseHelper.multiMongooseToObject(invoice);
            }
        ).catch(next);

        const MR = await MedicalRecord.findOne({ id_patient: req.params.id });
        const allAM = await Appointment.find();

        Client.findOne({ _id: req.params.id }).then(client => {
            let client_ = mongooseHelper.mongoosesToObject(client);

            let invoice = [];

            for (let i = 0; i < obj.length; i++) {
                if (obj[i].client._id == req.params.id) {
                    invoice.push(obj[i]);
                }
            }


            let AM = [];
            for (let i = 0; i < allAM.length; i++) {
                if (allAM[i].client.email == client_.email) {
                    AM.push(allAM[i]);
                }
            }

            res.render("client", {
                title: `Client: ${req.params.id}`,
                client: client_,
                ListInvoice: clientHelper.getListInvoice(invoice),
                ListPatient: clientHelper.getListPatient(MR.medicalHistory),
                ListAppointment: clientHelper.getListAppointment(AM),
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
