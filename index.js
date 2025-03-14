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
      document.getElementById("main").innerHTML = 
      `<h1>Malmö</h1>
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
      </article> `;
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
      </article> `;
    }
    else {
      document.getElementById("main").innerText = `Jag vet inte vart du är. ${userLat} ${userLon} ${distance}`;
    }
  }
  
  //error handling
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Användaren nekade begäran om Geolocation.");
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