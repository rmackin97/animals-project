"use strict";

const animalsController = require("../controllers/animals.server.controller");
const express = require("express");
const router = express.Router();

router.get("/", animalsController.renderAnimals);

router.get("/edit", animalsController.renderEditAnimals);

router.post("/edit", animalsController.handleEditAnimalsDelete)

router.get("/create", animalsController.renderCreateAnimal);

router.post("/create", animalsController.handleCreateAnimalSubmit);

router.get("/:id", animalsController.renderAnimal);

module.exports = router;