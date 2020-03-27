"use strict";

const indexController = require("../controllers/index.server.controller");
const express = require("express");
const router = express.Router();

router.get("/", indexController.renderIndex);

router.post("/", indexController.handleSelection)

module.exports = router;