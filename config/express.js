"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// app configuration and routing
module.exports = () => {
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.use(bodyParser.urlencoded({extended: true}));

    // app routes
    const indexRoutes = require("../app/routes/index.server.routes");
    app.use("/", indexRoutes);
    const animalRoutes = require("../app/routes/animals.server.routes");
    app.use("/animals", animalRoutes);
    // Error 404 handling
    app.use("*", (req, res) => {
        res.render("error", {status: 404, message: "Resource Not Found"});
    });

    return app;
};