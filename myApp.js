const express = require("express");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
  extname: ".hbs",
});
const path = require("path");
const routes = require("./src/routes");

// connect to DB
const db = require("./src/configs/db");
//connect DB
db.connect();

// declare app
const app = express();
const port = 3000;

// setup session
require('./src/configs/session')(app);

// setup resources for client
// all images,... are provided from the file "public"
app.use(express.static(path.join(__dirname, "src/public")));

//setup handlebars
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "resources", "view"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

routes(app);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
