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
            if (!req.session.uidClient) return res.redirect('/login');
            let obj = mongooseHelper.multiMongooseToObject(await Invoice.find({}));
            let MR = mongooseHelper.mongoosesToObject(await MedicalRecord.findOne({ id_patient: req.params.id }));
            const allAM = mongooseHelper.multiMongooseToObject(await Appointment.find());
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

            let MH = [];
            if (MR != null) MH = MR.medicalHistory;

            res.render("client", {
                title: `Client: ${req.params.id}`,
                client: client_,
                ListInvoice: clientHelper.getListInvoice(invoice),
                ListPatient: clientHelper.getListPatient(MH),
                ListAppointment: clientHelper.getListAppointment(AM),
            });

        }
        catch (err) {
            next(err);
        }

    }

    // [POST] /client/login
    async checkLogin(req, res, next) {
        // Check this account is remove?
        const isRemove = mongooseHelper.mongoosesToObject(await Client.findOneDeleted({
            email: req.body.email,
        }));

        // if not remove check 
        const client = mongooseHelper.mongoosesToObject(await Client.findOne({
            email: req.body.email,
        }));

        if (isRemove != null)
            return res.render('login', {
                notification: "Tài khoản này đã bị vô hiệu hóa!",
            })

        if (client == null)
            return res.render('login', {
                notification: "Nhập sai email!",
            })
        if (req.body.password != client.password)
            return res.render('login', {
                notification: "Nhập sai mật khẩu!",
            })
        req.session.uidClient = client._id;
        res.redirect(`/client/${client._id}`);
    }

    //[POST] /client/logout
    logout(req, res, next) {
        delete req.session.uidClient;
        res.redirect('/');
    }

    //[POST] /client/:id/updateInformation
    updateInformation(req, res, next) {
        // [PUT]    /curse/:id
        // this func after edit course
        Client.updateOne({ _id: req.params.id }, req.body)
            .then(() => console.log("Successfully update " + req.params.id))
            .catch(next);
    }

    //[GET] /client/checkAccount/:email/:password
    async apiCheckLogin(req, res, next) {
        const client = mongooseHelper.mongoosesToObject(await Client.findOne({
            email: req.params.email,
        }));
        if (client == null)
            return res.send({
                result: false,
                notification: "Nhập sai tài khoản!",
            });
        if (req.params.password != client.password) return res.send({
            result: false,
            notification: "Nhập sai mật khẩu!",
        });
        return res.send({
            result: true,
        });

    }

    //[POST] /client/disableInvoice
    removeInvoice(req, res, next) {
        Invoice.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    //[POST] //admin/disableAppointment/
    removeAppointment(req, res, next) {
        Appointment.delete({ _id: req.body.id })
            .then(() => console.log("Successfully deleted" + req.params.id))
            .catch(next);
    }

    // [POST] /client/add/Appointment
    addAppointment(req, res, next) {
        const ap = new Appointment(req.body);
        ap.save();
    }
}

module.exports = new ClientController();
