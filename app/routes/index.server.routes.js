"use strict";

const indexController = require("../controllers/index.server.controller");

module.exports = function(app){
    app.route("/")
        .get(indexController.renderIndex)
        .post(indexController.handleSelection);
};