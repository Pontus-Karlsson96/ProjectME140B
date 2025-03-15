function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(checkPosition, showError);
    } else {
      alert("Geolocation stöds inte av denna webbläsare.");
    }
  }
  
  function checkPosition(position) {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;
  
    // Koordinater för den specifika platsen
    const targetLat = 55.60587; // malmö
    const targetLon = 13.00073; // malmö
    //55.60587, 13.00073
    //55.586181, 13.013989
    //59.334591, 18.063240

    // Tolerans i meter
    const malmo = 10000;
    const sweden = 1000000;
  
    // Beräkna avståndet mellan användarens plats och målplatsen
    const distance = calculateDistance(userLat, userLon, targetLat, targetLon);
    
  
    if (distance <= malmo) {
      // Användaren är inom tolerance, visa information
      const main = document.getElementById("main");
      main.innerHTML = 
      `<h1>${locationObject.limhamn1.title}</h1>
      <h2>Din plats: ${userLat} ${userLon}</h2>
      <h3>Du är ${distance} meter från mig</h3>
      <h4>Body</h4>
      <article>${locationObject.limhamn1.description}
      </article> 
        `;

      const carouselContainer = document.createElement('div');
      carouselContainer.id = 'carouselContainer';
      
      const images = locationObject.limhamn1.images; //array
      images.forEach(imageHtml => {
        carouselContainer.innerHTML += imageHtml
      });
      main.appendChild(carouselContainer);

      const imageElements = document.querySelectorAll(".image1, .image2, .image3");
      imageElements.forEach(image => {
        image.addEventListener("click", () => {
            image.classList.toggle('selectedImage');

          });
        });

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.autoplay = true;
      const source = document.createElement('source');
      source.src = locationObject.limhamn1.audio;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      main.appendChild(audio);

    } else if (distance <= sweden) {
      document.getElementById("main").innerHTML = 
      `<h1>Sverige</h1>
      <h2>Din plats: ${userLat} ${userLon}</h2>
      <h3>Du är ${distance} meter från mig</h3>
      <h4>Body</h4>
      <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. <br><br>

          <b>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum </b> <br><br>

          <i>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum</i>
      </article> 
      `;
    }
    else {
      document.getElementById("main").innerText = `Ta dig till en av platserna på kartan. ${userLat} ${userLon} ${distance}`;
    }
  }
  
  //error handling
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Var vänligt tillåt din webbläsare att se din.");
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
  
  //lånad funktion för att räkna ut distanser på planeten jorden
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
  
    const d = R * c;
    return d;
  }
  
  window.onload = getLocation;