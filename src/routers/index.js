const siteRouter = require("./siteRouter");
const clientRouter = require("./clientRouter");
const loginRouter = require("./loginRouter");
const employeeRouter = require("./employeeRouter");
const adminRouter = require("./adminRouter");



function routers(app) {
  //localhost:3000/....
  app.use("/client", clientRouter);
  app.use("/login", loginRouter);
  app.use("/employee", employeeRouter);
  app.use("/admin", adminRouter);
  app.use("/", siteRouter);
}

module.exports = routers;
