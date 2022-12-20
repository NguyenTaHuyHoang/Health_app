class LoginController {
    // get interface

    interface(req, res) {
        if (req.session.uidAdmin) return res.redirect(`/admin/${req.session.uidAdmin}`);

        if (req.session.uidEmployee) return res.redirect(`/employee/${req.session.uidEmployee}`);

        if (req.session.uidClient) return res.redirect(`/client/${req.session.uidClient}`);
        res.render("login");
    }
}

module.exports = new LoginController();
