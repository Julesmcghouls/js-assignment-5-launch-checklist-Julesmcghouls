// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //querySelector
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name =copilotName]").value;
     let fuel = document.querySelector("input[name=fuelLevel]").value;
     let cargoMass = document.querySelector("input[name=cargoMass]").value;
     //getElementById
     let pilotStatus = document.getElementByID("pilotStatus");
     let copilotStatus = document.getElementByID("copilotStatus");
     let fuelStatus = document.getElementByID("fuelStatus");
     let cargoStatus = document.getElementByID("CargoStatus");
     let launchStatus = document.getElementByID("launchStatus");
     //validateInput
     const pilotValidation = validateInput(pilotName);
     const copilotValidation = validateInput(copilotName); 
     const fuelValidation = validateInput(fuel); 
     const cargoValidation = validateInput(cargoMass); 

     //Loop Verifying information
     if (pilotValidation === "Empty" || copilotValidation === "Emtpy" || fuelValidation === "Empty" || cargoValidation === "Empty") {
        alert("All fields are required!");
        return;
     } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelValidation === "Is a Number" || cargoValidation === "Is a Number") {
        alert("Numbers for pilot or co-pilot invaild");
        return;
     } 
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
