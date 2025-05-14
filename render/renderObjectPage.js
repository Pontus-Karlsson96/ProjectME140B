function displayLocationContent(location) {
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

    main.innerHTML = `
      <div class="mainTitleContainer"><div class="mainTitleHolder"><h2>${location.title}</h2></div>
        <li>---- 10 min<img src="./media/icons/iconStar.svg" 09-04-2025 alt="Stjärna">09-04-2025</li>
        <div class="imageFrame"><div class="imageContent"><img class="img" src="${location.images[0]}" alt="${location.alt[0]}"></div></div>
        <div class="bildtext">${location.alt[0]}</div>
        <article>${location.description}</article>
      </div>
    `;
  
    
    renderAudio(location, "#main");
    
    //image gallery om det finns bilder kommer de displayas här
    if (location.images && location.images.length > 1) {
      const gallery = document.createElement("div");
      gallery.classList.add("imageGallery");
  
      for (let i = 1; i < location.images.length; i++) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("imageFrame");
  
        galleryItem.innerHTML = `
          <div class="imageContent">
            <img class="img" src="${location.images[i]}" alt="${location.alt[i] || ""}">
          </div>
          <div class="bildtext">${location.alt[i] || ""}</div>
        `;
  
        gallery.appendChild(galleryItem);
      }
  
      main.appendChild(gallery);
  
    const section = document.createElement('section');
    section.id = 'quizSection';
    wrapper.appendChild(section);
    
    }
  
  };
