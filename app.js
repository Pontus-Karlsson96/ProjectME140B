let locationAlreadyDisplayed = false;
let userLat = null;
let userLon = null;
let locationInterval = null;
let trackingActive = null;

//audio eventlistner
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const audio = document.getElementById('introAudio');
console.log(playBtn);
console.log(pauseBtn);
console.log(audio);

playBtn.addEventListener("click", () => {
  
  audio.play();
  playBtn.classList.add('audioBtnDisabled');
  playBtn.classList.remove('audioBtnEnabled');
  pauseBtn.classList.add('audioBtnEnabled');
  pauseBtn.classList.remove('pauseBtnDisabled');
});

pauseBtn.addEventListener("click", () => {
 
  audio.pause();
  playBtn.classList.add('audioBtnEnabled');
  playBtn.classList.remove('audioBtnDisabled');
  pauseBtn.classList.add('audioBtnDisabled');
  pauseBtn.classList.remove('audioBtnEnabled');
});

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
function getLocation(trackingActive) {
locationInterval = setInterval(() => {
  if (!trackingActive) {
  clearInterval(locationInterval) } 

  navigator.geolocation.getCurrentPosition(checkPosition, showError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });
}, 5000);}

function checkPosition(position) {
  userLat = position.coords.latitude;
  userLon = position.coords.longitude;
  console.log(`User position: ${userLat}, ${userLon}`);

  const nextLocation = verifyOrder();
  console.log(nextLocation);
  

  const key = `LOCATION${nextLocation.storage_id}`;
  const locationData = locationObject[key];
  console.log("locationData:", locationData);
  if (!locationData) {
    console.warn(`Ingen platsdata hittades för id: ${nextLocation.id}`);
    return;
  }

  const distance = calculateDistance(userLat, userLon, locationData.lat, locationData.lon);
  console.log("distance:", distance);

  if (distance <= locationData.tolerance) {
    trackingActive = false;
    renderBtn(locationData, userLat, userLon, distance);
  } else {
    const main = document.getElementById("main");
    if (main) {
      main.innerText = `Ta dig till nästa plats: Avstånd till ${key}: ${Math.round(distance)} meter.`;
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

function renderBtn(obj, lat, lon, distance) {
const existingBtn = document.getElementById("OBJECTBUTTON");
if (existingBtn) return;
const main = document.getElementById('main');
const btn = document.createElement('button');
btn.id = "OBJECTBUTTON";
btn.textContent = "Visa plats";

btn.addEventListener("click", (event) => {
event.preventDefault();

structure.renderObject(obj, lat, lon, distance);
})
main.appendChild(btn); 
}

const startBtn = document.getElementById('startBtn');
startBtn.textContent = "Start";
startBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  structure.start();
});




