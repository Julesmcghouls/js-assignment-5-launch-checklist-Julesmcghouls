// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
     console.log(listedPlanetsResponse);
     listedPlanetsResponse.then(function (result) {
         listedPlanets = result;
         console.log(listedPlanets);
     }).then(function () {
         console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
 
     let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {
         event.preventDefault();
         let document = window.document;
         let pilot = document.querySelector("input[name=pilotName]");
         let pilotValue = pilot.value;
         let copilot = document.querySelector("input[name=copilotName]");
         let copilotValue = copilot.value;
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let fuelLevelValue = fuelLevel.value;
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let cargoMassValue = cargoMass.value;
         let list = document.getElementById("faultyItems");
         formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    });
    
 });