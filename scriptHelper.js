// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput) === true ){
        return "Not a Number";
    } else if (isNaN(testInput) === false ){
        return "Is a Number";
    };
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot.value) === "Is a Number"
    || validateInput(copilot.value) === "Is a Number"
    || validateInput(fuelLevel.value) === "Not a Number"
    || validateInput(cargoLevel.value) === "Not a Number") {
        alert("Invalid input!");
    } else {
        pilotStatus.innerHTML = `Pilot: ${pilot.value}`;
        copilotStatus.innerHTML = `Co-pilot: ${copilot.value}`
        if (fuelLevel.value < 10000){
            fuelStatus.innerHTML =  "Fuel level is too low for takeoff!";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else if (cargoLevel.value > 10000){
            cargoStatus.innerHTML =  "Cargo weight is too high for takeoff!";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else {
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";
        }
    };
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    console.log(document.getElementById("missionTarget"))
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
    
    
                 
 }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)     
        return response.json();
    });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;