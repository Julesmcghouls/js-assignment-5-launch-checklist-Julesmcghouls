require('isomorphic-fetch');

// Function to validate input and check if it's empty or a number
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

// Function to handle the form submission for the space shuttle launch
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    function isNumber(value) {
        return !isNaN(value);
    }

    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (isNumber(validateInput(pilot.value)) &&
        isNumber(validateInput(copilot.value)) &&
        isNumber(validateInput(fuelLevel.value)) &&
        isNumber(validateInput(cargoLevel.value))) {
        pilotStatus.innerHTML = `Pilot: ${pilot.value}`;
        copilotStatus.innerHTML = `Co-pilot: ${copilot.value}`;

        if (validateInput(fuelLevel.value) < 10000) {
            fuelStatus.innerHTML = `Fuel level is too low for takeoff! (Current: ${fuelLevel.value})`;
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else if (validateInput(cargoLevel.value) > 10000) {
            cargoStatus.innerHTML = `Cargo weight is too high for takeoff! (Current: ${cargoLevel.value})`;
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else {
            faultyItems.style.visibility = "hidden";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";
        }
    } else {
        alert("Invalid input!");
    }
}

// Function to add information about the mission destination to the webpage
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
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

// Fetch from JSON
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });
    return planetsReturned;
}

// Function to randomly pick a planet from an array of planets
function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;