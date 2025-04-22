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
      const play = document.createElement("button");
      play.id = "playBtn";
      const pause = document.createElement("button");
      pause.id = "pauseBtn";
      const audioContainer = document.createElement('div')
      audioContainer.classList.add('audioContainer');
  
      audio.autoplay = true;
      const source = document.createElement("source");
      source.src = location.audio;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      audioContainer.appendChild(play);
      audioContainer.appendChild(pause);
      main.appendChild(audio);
      main.appendChild(audioContainer);
    }
  
    const section = document.createElement('section');
    section.id = 'quizSection';
    wrapper.appendChild(section);
    renderQuiz(locationObject);
    }
  