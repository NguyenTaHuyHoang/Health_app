const express = require("express");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
  extname: ".hbs",
});
const path = require("path");
const routers = require("./routers");
const router = require("./routers/siteRouter");

// connect to DB
const db = require("./config/db");
//connect DB
db.connect();

// declare app
const app = express();
const port = 3000;

// setup resources for client
// all images,... are provided from the file "public"
app.use(express.static(path.join(__dirname, "public")));

//setup handlebars
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "view"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

routers(app);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
