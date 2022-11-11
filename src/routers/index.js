const siteRouter = require("./siteRouter");

function routers(app) {
  app.use("/", siteRouter);
}

module.exports = routers;
