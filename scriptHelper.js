// Write your helper functions here!
require('isomorphic-fetch');

// Function to add mission destination information to the HTML
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // HTML formatting for our missionTarget
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
        `
}
// Function to validate input data
function validateInput(testInput) {
    if (isNaN(testInput)) {
        return "Not a Number";
    } else if (testInput === "") {
        return "Empty";
    } else {
        return "Is a Number";
    }
}
// Function to handle form submission - elements from HTML 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    console.log(fuelLevel);
    console.log(cargoLevel);
 // Validate input data and provide appropriate alerts
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(Number(fuelLevel)) === "Empty" || validateInput(Number(cargoLevel)) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(Number(fuelLevel)) === "Not a Number" || validateInput(Number(cargoLevel)) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field?");
    } else {
        // Update status messages and determines if the shuttle is ready
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "hidden";

        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (Number(cargoLevel) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
    }
}
//function to fetch planet data from a JSON API
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await planetsReturned.json();
    return data;
}
// Function to pick a random planet from the provided array of planets
function pickPlanet(planets) {
    let planetPicked = planets[Math.floor(Math.random() * planets.length)];
    return planetPicked;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;