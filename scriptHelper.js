// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(str) {
 num = Number(str);
 
 if (str === '') {
 return 'Empty';
 }
 if (isNaN(num)) {
 return 'Not a Number';
 }
 if (isNaN(num) === false) {
 return 'Is a number';
 }
 }
 
 function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
 if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
 alert("All fields are required!");
 return false;
 }
 if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) !== "Is a number" || validateInput(cargoLevel.value) !== "Is a number") {
 alert("Make sure to enter valid information for each field!");
 return false;
 }
 if (fuelLevel.value < 10000 || cargoLevel.value > 10000) {
 return false;
 }
 
  return true;
}
 
 function updateNotReady() {
 document.getElementById("launchStatus").style.color = "red";
 document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
 }
 
 function updateReady() {
 document.getElementById("launchStatus").style.color = "green";
 document.getElementById("launchStatus").innerHTML = `Shuttle ready for launch!`;
 }
 
 function updateRequirements(pilot, copilot, fuelLevel, cargoLevel) {
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch`;
 
  if (Number(fuelLevel.value) < 10000) {
   document.getElementById("fuelStatus").innerHTML = `Fuel level too low to launch`;
  updateNotReady();
  }
  if (Number(cargoLevel.value) > 10000) {
   document.getElementById("cargoStatus").innerHTML = `Cargo mass too high to launch`;
   updateNotReady();
  }
 
  document.getElementById("faultyItems").style.visibility = "hidden";
 }
 
 
 
 function addDestinationInfo(planet) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML = `
  <h2>Mission Destination</h2>
<ol>
<li>Name: ${planet.name}</li>
<li>Diameter: ${planet.diameter}</li>
<li>Star: ${planet.star}</li>
<li>Distance from Earth: ${planet.distance}</li>
<li>Number of Moons: ${planet.moons}</li>
</ol>
<img src="${planet.image}">
`
 }


async function myFetch(url) {
 let planetsReturned;

 planetsReturned = await fetch(url).then( function(response) {
 return response.json();
 });

 return planetsReturned;
}

function pickPlanet(planets) {
 num = Math.floor(Math.random()*6);
 return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;