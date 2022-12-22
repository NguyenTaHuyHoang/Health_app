class LoginController {
    // get interface
    interface(req, res) {
        res.render("login");
    }
}

module.exports = new LoginController();
