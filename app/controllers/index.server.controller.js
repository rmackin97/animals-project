"use strict";

const Animal = require("mongoose").model("Animal");

exports.renderIndex = (req, res) => {
    Animal.find({}, (err, result) => {
        if(err){
            console.error("Error: Index Controller -- renderIndex");
            res.render("error", {status: 500, message: "Internal Server Error"});
        } else{
            res.render("index", {
                animals: result,
                animal: {id: null}
            });
        }
    });
};

exports.handleSelection = (req, res) => {
    const animal_id = req.body.animal_id;
    if(animal_id === "-1"){
        this.renderIndex(req, res);
    } else {
        Animal.find({}, (err, result) => {
            if(err){
                console.error("Error: Index Controller -- renderSelection");
                res.render("error", {status: 500, message: "Internal Server Error"});
            } else{
                let animal = {id: null};
                for(let i = 0; i < result.length; i++){
                    if(result[i].id == animal_id){
                        animal = result[i];
                        break;
                    }
                }

                res.render("index", {
                    animals: result,
                    animal: animal
                });
            }
        });
    }
};