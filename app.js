let locationAlreadyDisplayed = false;
let userLat = null;
let userLon = null;
let locationInterval = null;
let trackingActive = true;
let gameDone = false;



//Hämtar location och sparar i lat och lon
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("Latitude:", lat, "Longitude:", lon)});
    
//togglar hide på map
function mapFunction() {
  const map = document.getElementById("mapContainer");
  map.classList.toggle("hide");
}

//uppdaterar locationInterval variable med hämtad position och kallar på checkPosition(), uppdateras var 5e sekund. Denna måste stoppas!
function getLocation() {

  trackingActive = true;

  locationInterval = setInterval(() => {
    if (!trackingActive) {
      console.log("TRACKING HAS BEEN DEACTIVATED", trackingActive);
      clearInterval(locationInterval);
      return;
    }

    console.log("Tracking on", trackingActive);

    navigator.geolocation.getCurrentPosition(checkPosition, showError, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    });
  }, 5000);
}


function checkPosition(position) {
  userLat = position.coords.latitude;
  userLon = position.coords.longitude;
  console.log(`User position: ${userLat}, ${userLon}`);

  console.log("Kallar verifyOrder()");
  const nextLocation = verifyOrder();
  console.log("verifyOrder() resultat:", nextLocation);

  if (!nextLocation) {
    console.warn("verifyOrder() returnerade null – ingen aktiv plats.");
    trackingActive = false;
    clearInterval(locationInterval);
    return;
  }

  console.log("verifyOrder() resultat:", nextLocation);
  
  
  const key = `LOCATION${nextLocation.storage_id}`;
  const locationData = locationObject[key];
 
  if (!locationData) {
    console.warn(`Ingen platsdata hittades för id: ${nextLocation.id}`);
    return;
  }

  const distance = calculateDistance(userLat, userLon, locationData.lat, locationData.lon);
  

  if (distance <= locationData.tolerance) {
    trackingActive = false;
    renderBtn(locationData, userLat, userLon, distance);
  } else {
    const parent = document.getElementById("activeCard");
    if (parent) {
      let nextTextContainer = parent.querySelector('.distanceMessage');

    if (!nextTextContainer) {
    nextTextContainer = document.createElement('div');
    nextTextContainer.classList.add('distanceMessage');
    parent.appendChild(nextTextContainer);
  }

  nextTextContainer.innerHTML = `Rör på påkarna! ${formatDistance(distance)} kvar.`;


      
    };
  };

  
  /*const distanceToObject1 = calculateDistance(userLat, userLon, locationObject.LOCATION1.lat, locationObject.LOCATION1.lon);
  const distanceToObject2 = calculateDistance(userLat, userLon, locationObject.LOCATION2.lat, locationObject.LOCATION2.lon);
  const distanceToObject3 = calculateDistance(userLat, userLon, locationObject.LOCATION3.lat, locationObject.LOCATION3.lon);
  const distanceToObject4 = calculateDistance(userLat, userLon, locationObject.LOCATION4.lat, locationObject.LOCATION4.lon);
  const distanceToMalmo = calculateDistance(userLat, userLon, locationObject.MALMO.lat, locationObject.MALMO.lon);
  
 

  if (distanceToObject1 <= locationObject.LOCATION1.tolerance) {
    renderBtn(locationObject.LOCATION1, userLat, userLon, distanceToObject1);
    trackingActive = false;
  } else if (distanceToObject2 <= locationObject.LOCATION2.tolerance) {
    trackingActive = false;
    renderBtn(locationObject.LOCATION2, userLat, userLon, distanceToObject2);
  } else if (distanceToObject3 <= locationObject.LOCATION3.tolerance) {
    trackingActive = false;
    renderBtn(locationObject.LOCATION3, userLat, userLon, distanceToObject3);
  } else if (distanceToObject4 <= locationObject.LOCATION4.tolerance) {
    trackingActive = false;
    renderBtn(locationObject.LOCATION4, userLat, userLon, distanceToObject4);
  } else { 
    const main = document.getElementById("main");
    if (main) {
      main.innerText = `Ta dig till en av platserna på kartan. ${userLat} ${userLon} ${distanceToMalmo}`;
    }
  }*/
}


function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Var vänligt tillåt din webbläsare att se din plats.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Platsinformation är otillgänglig.");
      break;
    case error.TIMEOUT:
      alert("Tidsgränsen för att få användarens plats överskreds.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Ett okänt fel uppstod.");
      break;
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function formatDistance(meters) {
  return meters >= 1000
    ? `${(meters / 1000).toFixed(1)} km`
    : `${Math.round(meters)} m`;
}

function renderBtn(obj, lat, lon, distance) {
const existingBtn = document.getElementById("OBJECTBUTTON");
if (existingBtn) return;
const parent = document.getElementById('activeCard');
const objectBtnContainer = document.createElement('div');
const btn = document.createElement('button');

objectBtnContainer.id = "objectBtnContainer";
objectBtnContainer.innerHTML =`
<h2> På plats!</h2>
<h2>Redo att starta?</h2>
`;

btn.id = "OBJECTBUTTON";
btn.textContent = "Starta";

btn.addEventListener("click", (event) => {
event.preventDefault();

structure.renderObject(obj, lat, lon, distance);
})
objectBtnContainer.appendChild(btn);
parent.appendChild(objectBtnContainer); 
}

const startBtn = document.getElementById('startBtn');
const startBtnContainer = document.getElementById('startContainer');



startBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  startBtnContainer.remove();
  structure.start();
});

document.addEventListener("DOMContentLoaded", () => {
  initAudioControls();
});





