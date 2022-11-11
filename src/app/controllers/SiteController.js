class SiteController {
  // get interface
  interface(req, res) {
    res.render("homepage");
  }
}

module.exports = new SiteController();
