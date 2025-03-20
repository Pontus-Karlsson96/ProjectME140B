function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(checkPosition, showError);
  } else {
    alert("Geolocation stöds inte av denna webbläsare.");
  }
}

//Check user position
function checkPosition(position) {
  const userLat = position.coords.latitude;
  const userLon = position.coords.longitude;

  //Check distance to set places determined in locationInfo.js. 
  const distanceToNiagara = calculateDistance(userLat, userLon, locationObject.NIAGARA.lat, locationObject.NIAGARA.lon);
  const distanceToTexas = calculateDistance(userLat, userLon, locationObject.TEXAS.lat, locationObject.TEXAS.lon);
  const distanceToLimhamn = calculateDistance(userLat, userLon, locationObject.LIMHAMN.lat, locationObject.LIMHAMN.lon);
  const distanceToLonngatan = calculateDistance(userLat, userLon, locationObject.LONNGATAN.lat, locationObject.LONNGATAN.lon);
  //display object content based on the distance and tolerance. 
  if (distanceToNiagara <= locationObject.NIAGARA.tolerance) {
    displayLocationContent(locationObject.NIAGARA, userLat, userLon, distanceToNiagara);
  } else if (distanceToTexas <= locationObject.TEXAS.tolerance) {
    displayLocationContent(locationObject.TEXAS, userLat, userLon, distanceToTexas);
  } else if (distanceToLimhamn <= locationObject.LIMHAMN.tolerance) {
    displayLocationContent(locationObject.LIMHAMN, userLat, userLon, distanceToLimhamn);
  } else if (distanceToLonngatan <= locationObject.LONNGATAN.tolerance) {
    displayLocationContent(location.Object.LONNGATAN, userLat, userLon, distanceToLonngatan);
  } else { 
    const main = document.getElementById("main");
    if (main) {
      main.innerText = `Ta dig till en av platserna på kartan. ${userLat} ${userLon} ${'distanceToMalmo'}`;
    }
  }
}

//user location
function displayLocationContent(location, userLat, userLon, distance) {
  const main = document.getElementById("main");
  if (!main) {
    console.error("Element with ID 'main' not found.");
    return;
  }

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
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  return d;
}

window.onload = getLocation;