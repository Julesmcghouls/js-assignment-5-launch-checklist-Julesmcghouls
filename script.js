// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let document = window.document;
        let pilot = document.querySelector("input[name=pilotName]").value;
        let coPilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");


        if (pilot === "" || coPilot === "" || fuelLevel === "" || cargoMass === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else {
            formSubmission(document, list, pilot, coPilot, fuelLevel, cargoMass);
            event.preventDefault();
        };

    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);

   }).then(function () {

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPicked = pickPlanet(listedPlanets);
       console.log(planetPicked);
       
        console.log(planetPicked.name);

       addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    })
   
});