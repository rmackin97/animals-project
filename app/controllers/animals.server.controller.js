"use strict";

const Animal = require("mongoose").model("Animal");

exports.renderAnimals = (req, res) => {
    Animal.find({}, (err, result) => {
        if(err){
            console.error("Error: Animals Controller -- renderAnimals");
            res.render("error", {status: 500, message: "Internal Server Error"});
        } else{
            res.render("animals", {animals: result});
        }
    });
};

exports.renderAnimal = (req, res) => {
    let id = req.params.id;
    if(id.match("^[0-9]+$")){
        id = Number.parseInt(id);

        Animal.find({id: id}, (err, result) => {
            if(err){
                console.error("Error: Animals Controller -- renderAnimal");
                res.render("error", {status: 500, message: "Internal Server Error"});
            } else if(result.length != 0){
                res.render("animal", {animal: result[0]});
            } else{
                res.render("error", {status: 404, message: "Resource Not Found"});
            }
        });
    } else{
        res.render("error", {status: 404, message: "Resource Not Found"});
    }
};

// CREATE & DELETE Functionality -- Not Implemented (Using Mongoose)
/*
exports.renderEditAnimals = (req, res) => {
    Animal.find({}, (err, result) => {
        if(err){
            console.error("Error: Animals Controller -- renderAnimals");
            res.render("error", {status: 500, message: "Internal Server Error"});
        } else{
            res.render("edit_animals", {animals: result});
        }
    });
};

exports.handleEditAnimalsDelete = (req, res) => {
    res.send("");
    // const id = Number.parseInt(req.body.id);

    // animalsModel.db.collection("animals").deleteOne({id: id}, (err, result) => {
    //     if(err){
    //         console.log("Error: Animals Controller -- handleEditAnimalsDelete");
    //         res.render("error", {status: 500, message: "Internal Server Error"});
    //     } else{
    //         res.redirect("/animals");
    //     }
    // });
};

exports.renderCreateAnimal = (req, res) => {
    res.render("create_animal", {
        value: {
            name: "",
            weight: "",
            height: "",
            color: "",
            dob: ""},
        valid: {
            name: true,
            weight: true,
            height: true,
            color: true,
            dob: true
        }
    });
};

exports.handleCreateAnimalSubmit = (req, res) => {
    res.send("");

    // const name = req.body.name, 
    //     weight = req.body.weight,
    //     height = req.body.height,
    //     color = req.body.color,
    //     dob = req.body.dob;

    // // very rough user input test cases
    // let validName = name.match("^[a-zA-Z]+$") ? true : false;
    // let validWeight = weight.match("^[0-9]+$") ? true : false;
    // let validHeight = height.match("^[0-9]+$") ? true : false;
    // let validColor = color.match("^[a-zA-Z]+$") ? true : false;
    // let validDoB = dob.match("^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$") ? true : false;

    // // validates all user input
    // if(validName & validWeight & validHeight & validColor & validDoB){
    //     animalsModel.db.collection("animals").find({}).count((err, result) => {
    //         if(err){
    //             console.error("Error: Animals Controller -- renderSubmitCreate");
    //             res.render("error", {status: 500, message: "Internal Server Error"});
    //         } else{
    //             const date = dob.split("-");
    //             // new Animal document to be inserted
    //             const animal = {
    //                 id: result, 
    //                 name: name, 
    //                 weight: weight, 
    //                 height: height, 
    //                 color: color, 
    //                 dob: new Date(date[2], date[0]-1, date[1])
    //             };

    //             animalsModel.db.collection("animals").insertOne(animal, (err, result) => {
    //                 if(err){
    //                     console.error("Error: Animals Controller -- renderSubmitCreate");
    //                     res.render("error", {status: 500, message: "Internal Server Error"});
    //                 } else{
    //                     res.redirect("/animals");
    //                 }
    //             });
    //         }
    //     });
    // } else{
    //     // one or more malformed user input
    //     res.render("create_animal", {
    //         value: {
    //             name: name,
    //             weight: weight,
    //             height: height,
    //             color: color,
    //             dob: dob},
    //         valid: {
    //             name: validName,
    //             weight: validWeight,
    //             height: validHeight,
    //             color: validColor,
    //             dob: validDoB
    //         }
    //     });
    // }
};
*/