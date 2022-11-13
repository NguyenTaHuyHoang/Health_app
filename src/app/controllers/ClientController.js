class ClientController {
    // get interface
    interface(req, res) {
        res.render("client");
    }
}

module.exports = new ClientController();
