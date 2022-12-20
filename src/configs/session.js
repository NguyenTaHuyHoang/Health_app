const session = require('express-session');

module.exports = app => {
    app.use(
        session({
            secret: "key that will sign cookies",
            resave: true,
            saveUninitialized: false,
            store: "",
        })
    )
}