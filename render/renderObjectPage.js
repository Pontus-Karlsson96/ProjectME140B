function displayLocationContent(location, userLat, userLon, distance) {
    const wrapper = document.getElementById('wrapper');

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
    main.classList.remove('mainStart');
    main.classList.toggle('mainObject');
    main.innerHTML = `
      <h2>${location.title}</h2>
      <h3>Din plats: ${userLat} ${userLon}</h2>
      <h4>Du är ${distance} meter från mig</h3>
      <h4>Body</h4>
      <article>${location.description}</article>
    `;
  
    if (location.images) {
      console.log("LÄGG TILL BILDER HÄR");
    };

    renderAudio(location, "#main");

  
    const section = document.createElement('section');
    section.id = 'quizSection';
    wrapper.appendChild(section);
    
    }
  