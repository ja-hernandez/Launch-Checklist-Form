// Write your JavaScript code here!
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

function init () {
   let launchForm = document.getElementById("launchForm")
   console.log('window loaded, and now in the init');
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      const planetListSize = json.length;
      let i = Math.floor(Math.random()*planetListSize);
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[i].name}</li>
   <li>Diameter: ${json[i].diameter}</li>
   <li>Star: ${json[i].star}</li>
   <li>Distance from Earth: ${json[i].distance}</li>
   <li>Number of Moons: ${json[i].moons}</li>
</ol>
<img src="${json[i].image}">
      `
   })

})
   launchForm.onsubmit = submitHandler;
}

   function submitHandler (event) {
      console.log('made it to the submit handler')
      let launchForm = document.querySelector("form");
      console.log("found the form boss");
      let pilotName = launchForm.querySelector("input[name=pilotName]");
      let copilotName = launchForm.querySelector("input[name=copilotName");
      let fuelLevel = launchForm.querySelector("input[name=fuelLevel]");
      let cargoMass = launchForm.querySelector("input[name=cargoMass]");
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
      faultyItemsUpdate(event);
      event.preventDefault();
   }

   function faultyItemsUpdate (event) {
      console.log("made it in to faulty");
      let pilotName = launchForm.querySelector("input[name=pilotName]");
      let copilotName = launchForm.querySelector("input[name=copilotName");
      let fuelLevel = launchForm.querySelector("input[name=fuelLevel]");
      let cargoMass = launchForm.querySelector("input[name=cargoMass]");
      let faultyDiv = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus")
      pilotStatus.innerHTML = `
      Pilot ${pilotName.value} is ready for launch.
       `;
       copilotStatus.innerHTML = `
       Co-pilot ${copilotName.value} is ready for launch.
       `;
      if (fuelLevel.value < 10000) {
         faultyDiv.style.visibility = "visible";
         fuelStatus.innerText = "Fuel level too low for launch"
         launchStatus.innerText = "Shuttle not ready for launch"; 
         launchStatus.style.color = "red";
         event.preventDefault();
                  
      }
      else if (cargoMass.value > 10000) {
         faultyDiv.style.visibility = "visible";
         cargoStatus.innerText = "Cargo mass too high for launch"
         launchStatus.innerText = "Shuttle not ready for launch"; 
         launchStatus.style.color = "red";
         event.preventDefault();
      }
      else {
         launchStatus.innerText = "Shuttle is ready for launch"; 
         launchStatus.style.color = "green";
      }
   // event.preventDefault();
   }


   


   window.onload = init;