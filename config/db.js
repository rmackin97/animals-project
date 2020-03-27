"use strict";

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//database configuration and initialization
exports.configure = () => {
    mongo.connect(url, (err, client) => {
        if(err){
            console.log("Error connecting to database.");
            throw err;
        } else{
            console.log("Connected to database!");
            const db = client.db("animals");
            const animals = db.collection("animals");

            // initial database animals
            const initialData = [
                {id: 0, name: "Tiger", weight: 500, height: 3, color: "Orange", dob: new Date(2013, 7, 16)},
                {id: 1, name: "Penguin", weight: 20, height: 1, color: "Black and White", dob: new Date(2017, 10, 9)}
            ];

            // creates a unique index on the id key in the animals collection
            animals.createIndex({id: 1}, {unique: true}, (err, result) => {
                if(err){
                    console.error("Error creating database index");
                } else{
                    console.log("Database index created.")
                }
            });

            // inserts the initial animals data into the animals collection
            animals.insertMany(initialData, (err, result) => {
                if(err){
                    console.error("Error inserting initial animals data into database.");
                } else{
                    console.log("Initialized database.")
                }
            });

            client.close(() => console.log("Connection closed."));
        }
    });
};


