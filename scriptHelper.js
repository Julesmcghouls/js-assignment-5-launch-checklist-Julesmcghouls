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
        return "Empyy";
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
     //Validate
     const pilotValidation = validateInput(pilotName);
     const copilotValidation = validateInput(copilotName); 
     const fuelValidation = validateInput(fuel); 
     const cargoValidation = validateInput(cargoMass);   
   
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
