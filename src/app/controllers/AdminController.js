class AdminController {
    // get interface
    interface(req, res) {
        res.render("admin");
    }
}

module.exports = new AdminController();
