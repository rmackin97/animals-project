"use strict";

const config = require("./env/development"),
    mongoose = require("mongoose");

module.exports = function(){
    const db = mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});

    require("../app/models/animal.server.model");

    mongoose.connection.on("error", err => {
        console.log(err);
    });

    mongoose.connection.once("connected", () => {
        console.log("Initializing database.");
        const Animal = mongoose.model("Animal");

        // initial database animals
        const initialData = [
            {id: 0, name: "Tiger", weight: 500, height: 3, color: "Orange", dob: new Date(2013, 7, 16)},
            {id: 1, name: "Penguin", weight: 20, height: 1, color: "Black and White", dob: new Date(2017, 10, 9)}
        ];

        // inserting initial animal documents
        for(let i = 0; i < initialData.length; i++){
            const animal = new Animal(initialData[i]);     
            animal.save((err, result) => {
                if(err){
                    console.log(err.code == 11000 ? "Attempted to insert duplicate document." : err);
                } else{
                    console.log("Saved document: "+result);
                }
            });
        }
    });

    return db;
};