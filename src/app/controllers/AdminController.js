const Admin = require('../models/admin');

class AdminController {
    // get interface
    //[GET] /admin
    interface(req, res, next) {
        res.render("admin", {
            title: "Admin",
        });
    }

    // [POST] /admin/login
    checkLogin(req, res, next) {
        Admin.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(admin => {
            if (admin.length == 0) {
                res.render('login', {
                    notification: "Nhập sai email hoặc mật khẩu!",
                })
            }
            else {
                res.redirect('/admin');
            }
        })
            .catch(next);
    }
}

module.exports = new AdminController();
