"use strict";

const mongoose = require("./config/mongoose");
const db = mongoose();

const express = require("./config/express");
const app = express();

app.listen(3000, () => console.log("Listening on port 3000."));