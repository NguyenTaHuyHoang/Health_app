const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

// declare app
const app = express();
const port = 3000;

// setup resources for client
app.use(express.static(path.join(__dirname, "public")));

//setup handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "view"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
