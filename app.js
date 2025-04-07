let locationAlreadyDisplayed = false;
let userLat = null;
let userLon = null;
let locationInterval = null;
let trackingActive = null;

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
  clearInterval() } 

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
  
  const distanceToObject1 = calculateDistance(userLat, userLon, locationObject.LOCATION1.lat, locationObject.LOCATION1.lon);
  const distanceToObject2 = calculateDistance(userLat, userLon, locationObject.LOCATION2.lat, locationObject.LOCATION2.lon);
  const distanceToObject3 = calculateDistance(userLat, userLon, locationObject.LOCATION3.lat, locationObject.LOCATION3.lon);
  const distanceToObject4 = calculateDistance(userLat, userLon, locationObject.LOCATION4.lat, locationObject.LOCATION4.lon);
  const distanceToMalmo = calculateDistance(userLat, userLon, locationObject.MALMO.lat, locationObject.MALMO.lon);
  console.log(distanceToObject1, distanceToObject2);
  console.log(locationObject.LOCATION1.tolerance)
 

  if (distanceToObject1 <= locationObject.LOCATION1.tolerance) {
    renderBtn(locationObject.LOCATION1, userLat, userLon, distanceToObject1);
    trackingActive = true;
  } else if (distanceToObject2 <= locationObject.LOCATION2.tolerance) {
    trackingActive = true;
    renderBtn(locationObject.LOCATION2, userLat, userLon, distanceToObject2);
  } else if (distanceToObject3 <= locationObject.LOCATION3.tolerance) {
    trackingActive = true;
    renderBtn(locationObject.LOCATION3, userLat, userLon, distanceToObject3);
  } else if (distanceToObject4 <= locationObject.LOCATION4.tolerance) {
    trackingActive = true;
    renderBtn(locationObject.LOCATION4, userLat, userLon, distanceToObject4);
  } else { 
    const main = document.getElementById("main");
    if (main) {
      main.innerText = `Ta dig till en av platserna på kartan. ${userLat} ${userLon} ${distanceToMalmo}`;
    }
  }
}

function displayLocationContent(location, userLat, userLon, distance) {

  const main = document.getElementById("main");
  if (!main) {
    console.error("Element with ID 'main' not found.");
    return;
  }

  const map = document.getElementById('mapContainer');
  if (!map) {
    console.error("Element with ID 'mapContainer' not found.");
    return;
  }

  map.classList.toggle('hide');
  main.innerHTML = `
    <h1>${location.title}</h1>
    <h2>Din plats: ${userLat} ${userLon}</h2>
    <h3>Du är ${distance} meter från mig</h3>
    <h4>Body</h4>
    <article>${location.description}</article>
  `;

  if (location.images) {
    const carouselContainer = document.createElement("div");
    carouselContainer.id = "carouselContainer";
    location.images.forEach((imageHtml) => {
      carouselContainer.innerHTML += imageHtml;
    });
    main.appendChild(carouselContainer);

    const imageElements = document.querySelectorAll(".image1, .image2, .image3");
    imageElements.forEach((image) => {
      image.addEventListener("click", () => {
        image.classList.toggle("selectedImage");
      });
    });
  }

  if (location.audio) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.autoplay = true;
    const source = document.createElement("source");
    source.src = location.audio;
    source.type = "audio/mpeg";
    audio.appendChild(source);
    main.appendChild(audio);
  }

  const quizContainer = document.getElementById('quizContainer');
  if (quizContainer && location.question) {
    quizContainer.innerHTML = ""; 
    location.question.forEach((item, index) => {
      const question = document.createElement('button');
      question.textContent = `Fråga ${index + 1}: ${item}`;
      quizContainer.appendChild(question);
    });
  }
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

const startBtn = document.getElementById('startBtn');

startBtn.addEventListener("click", (event)=>{
  event.preventDefault();

  main.innerHTML = "";
  startBtn.classList.add("hide");
  mapFunction();
  getLocation();
})

function renderBtn(obj, lat, lon, distance) {
const existingBtn = document.getElementById("OBJECTBUTTON");
if (existingBtn) return;

const btn = document.createElement('button');
btn.id = "OBJECTBUTTON";
btn.textContent = "Visa plats";


btn.addEventListener("click", (event) => {
event.preventDefault();

displayLocationContent(obj, lat, lon, distance);
})
main.appendChild(btn); 
}

//window.onload = getLocation;
