window.addEventListener("load", function () {

    let listedPlanets = "https://handlers.education.launchcode.org/static/planets.json";
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(listedPlanets);
    listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
    }).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    console.log(planet);
    addDestinationInfo(planet);
    })
    
    // form input validation
    let form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    
    form.addEventListener("submit", function (event) {
    if (!formSubmission(pilot, copilot, fuelLevel, cargoLevel)) {
    updateRequirements(pilot, copilot, fuelLevel, cargoLevel);
   event.preventDefault();
    }
   updateReady();
   event.preventDefault();
    });
    });