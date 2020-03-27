"use strict";

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongo.connect(url, (err, client) => {
    if(err){
        console.log("Error connecting to database.");
        throw err;
    } else{
        exports.db = client.db("animals");
    }
});