// Write your JavaScript code here!
function init () {
   let launchForm = document.getElementById("launchForm")
   console.log('window loaded, and now in the init');
   launchForm.onsubmit = submitHandler;
   faultyItemsUpdate;
}

   function submitHandler (event) {
      console.log('made it to the submit handler')
      let launchForm = document.querySelector("form");
      console.log("found the form boss");
      let pilotName = launchForm.querySelector("input[name=pilotName]");
      let copilotName = launchForm.querySelector("input[name=copilotName");
      let fuelLevel = launchForm.querySelector("input[name=fuelLevel]");
      let cargoMass = launchForm.querySelector("input[name=cargoMass]")
      console.log("submitted answers", pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
      if (pilotName.value === "" ||
         copilotName.value === "" ||
         fuelLevel.value === "" ||
         cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault(); 
         }
         console.log(Number(pilotName.value));
         console.log(Number(copilotName.value))
      if (!(isNaN(Number(pilotName.value)))) {
            alert("Please enter a string and not numbers for Pilot Name");
            event.preventDefault();
      }
      if (!(isNaN(Number(copilotName.value)))) {
         alert("Please enter a string and not numbers for Copilot Name");
         event.preventDefault();
   }
      if (isNaN(fuelLevel.value)) {
            alert ("Please enter a number for fuel level");
            event.preventDefault();
         }
       if (isNaN(cargoMass.value)) {
            alert("Please enter a number for cargo mass");
            event.preventDefault();
         }
   }

   function faultyItemsUpdate {
      let launchForm = document.querySelector("form");
      let pilotName = launchForm.querySelector("input[name=pilotName]");
      let copilotName = launchForm.querySelector("input[name=copilotName");
      let fuelLevel = launchForm.querySelector("input[name=fuelLevel]");
      let cargoMass = launchForm.querySelector("input[name=cargoMass]")
      let faultyDiv = document.getElementById("faultyItems");
      let pilotStatus = faultyDiv.getElementById("pilotStatus");
      let copilotStatus = faultyDiv.getElementById("copilotStatus")
      let fuelStatus = faultyDiv.getElementById("fuelStatus");
      let cargoStatus = faultyDiv.getElementById("cargoStatus");
      pilotStatus.innerHTML = `
      <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
      `
   }
   window.onload = init;



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
