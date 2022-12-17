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
        try {
            let obj = mongooseHelper.multiMongooseToObject(await Invoice.find({}));
            const MR = await MedicalRecord.findOne({ id_patient: req.params.id });
            const allAM = await Appointment.find();
            let client_ = mongooseHelper.mongoosesToObject(await Client.findOne({ _id: req.params.id }));

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

        }
        catch (err) {
            next(err);
        }

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

    //[GET client/:email/:password
    async apiCheckLogin(req, res, next) {
        const client = mongooseHelper.mongoosesToObject(await Client.findOne({
            email: req.params.email,
            password: req.params.password
        }));
        if (client != null) return res.send({
            result: true,
        });
        res.send({
            result: false,
        });
    }
}

module.exports = new ClientController();
