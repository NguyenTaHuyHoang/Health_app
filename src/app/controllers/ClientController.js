const Client  = require('../models/client');

class ClientController {
    // get interface
    //[GET] /client
    interface(req, res) {
        res.render("client");
    }

    // [POST] /client/login
    checkLogin(req, res, next) {
        Client.find({
            email: req.body.email,
            password: req.body.password
        }).then(admin => {
            if (admin.length == 0) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                res.render('client', {
                })
            }
        })
            .catch(next);
    }
}

module.exports = new ClientController();
