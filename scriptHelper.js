// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const targetDiv = document.getElementById('missionTarget');
    targetDiv.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if(!isNaN(testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    console.log(fuelLevel);

    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("Please enter the required data below.");
        list.style.visibility = "hidden";
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a valid name for the Pilot and/or Co-Pilot.");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter a valid numerical value for the fuel level and/or cargo mass.");
    } else {

        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        // let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");

        console.log(cargoStatus);
    
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        } else if (fuelLevel < 10000 && cargoLevel <= 10000){
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#C7254E";
        }

        if (fuelLevel >= 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "#C7254E";
        } else if(fuelLevel >= 10000 && cargoLevel <= 10000){
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#419F6A";
        }
    } 
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        if (!response) {
            throw new Error('Error: Bad request. Try again.')
        } else {
            return response.json()
        }
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let pickRandomPlanet = planets[Math.floor(Math.random() * (planets.length))];
    return pickRandomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;