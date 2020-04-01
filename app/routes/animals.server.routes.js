"use strict";

const animalsController = require("../controllers/animals.server.controller");

module.exports = function(app){
    app.route("/animals")
        .get(animalsController.renderAnimals);
    app.route("/animals/:id")
        .get(animalsController.renderAnimal);

    // CREATE & DELETE Functionality -- Not Implemented (Using Mongoose)
    // app.route("/animals/edit")
    //     .get(animalsController.renderEditAnimals)
    //     .post(animalsController.handleEditAnimalsDelete);
    // app.route("animals/create")
    //     .get(animalsController.renderCreateAnimal)
    //     .post(animalsController.handleCreateAnimalSubmit);
};