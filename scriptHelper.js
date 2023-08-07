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
// Function to validate input data
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if(!isNaN(testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
}
// Function to handle form submission
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
         // Check conditions for launch readiness and update statuses accordingly
        // Shuttle not ready for launch due to low fuel and heavy cargo
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        // Shuttle not ready for launch due to low fuel but acceptable cargo
        } else if (fuelLevel < 10000 && cargoLevel <= 10000){
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#C7254E";
        }
        // Shuttle not ready for launch due to high fuel but heavy cargo
        if (fuelLevel >= 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "#C7254E";
        // Shuttle ready for launch with acceptable fuel and cargo
        } else if(fuelLevel >= 10000 && cargoLevel <= 10000){
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#419F6A";
        }
    } 
   
}
// Function to fetch planets' information from a remote JSON file
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
// Function to pick a random planet from a list of planets
function pickPlanet(planets) {
    let pickRandomPlanet = planets[Math.floor(Math.random() * (planets.length))];
    return pickRandomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;