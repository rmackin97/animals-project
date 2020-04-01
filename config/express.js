"use strict";

const express = require("express"),
    bodyParser = require("body-parser");

const app = express();
// app configuration and routing
module.exports = () => {
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.use(bodyParser.urlencoded({extended: true}));

    // app routes
    require("../app/routes/index.server.routes") (app);
    require("../app/routes/animals.server.routes") (app);
    // Error 404 handling
    app.use("*", (req, res) => {
        res.render("error", {status: 404, message: "Resource Not Found"});
    });

    return app;
};