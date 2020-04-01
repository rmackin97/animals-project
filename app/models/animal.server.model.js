"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    id: {type: Number, unique: true},
    name: String,
    height: Number,
    weight: Number,
    color: String,
    dob: Date
});

mongoose.model("Animal", AnimalSchema);