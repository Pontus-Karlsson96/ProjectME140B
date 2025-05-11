function renderAudio(location, parentSelector) {
    const container = document.querySelector(parentSelector);
    if (!container) {
      console.warn("Container not found:", parentSelector);
      return;
    }

    
  
    const audio = document.createElement("audio");
    audio.id = "introAudio";
    const source = document.createElement("source");
    source.src = location.audio;
    source.type = "audio/mpeg";
    audio.appendChild(source);
  
    const playBtn = document.createElement("button");
    playBtn.id = "playBtn";
    playBtn.classList.add("audioBtnEnabled");
    playBtn.innerHTML = `<img src="./media/icons/iconPlay.svg">Tjuvlyssna`;
  
    const pauseBtn = document.createElement("button");
    pauseBtn.id = "pauseBtn";
    pauseBtn.classList.add("audioBtnDisabled");
    pauseBtn.innerHTML = `<img src="./media/icons/iconPlay.svg">Pausa`;

    const replayBtn = document.createElement("button");
    replayBtn.id = "replayBtn";
    replayBtn.classList.add("audioBtnDisabled");
    replayBtn.innerHTML = `<img src="./media/icons/iconReplay.svg">Spela om`;

  
    const audioContainer = document.createElement('div');
    audioContainer.classList.add('audioContainer');
    audioContainer.appendChild(playBtn);
    audioContainer.appendChild(pauseBtn);
    audioContainer.appendChild(replayBtn);
  
    container.appendChild(audio);
    container.appendChild(audioContainer);
    
  
    initAudioControls(audio, playBtn, pauseBtn);
  }
  
  function initAudioControls(audio = null, playBtn = null, pauseBtn = null, replayBtn = null) {
    if (!audio) audio = document.getElementById('introAudio');
    if (!playBtn) playBtn = document.getElementById('playBtn');
    if (!pauseBtn) pauseBtn = document.getElementById('pauseBtn');
    if (!replayBtn) replayBtn = document.getElementById('replayBtn');

    if (!audio || !playBtn || !pauseBtn || !replayBtn) {
      console.warn("Audio controls not fully initialized");
      return;
    }
  
    playBtn.addEventListener("click", () => {
      audio.play();
      playBtn.classList.add('audioBtnDisabled');
      playBtn.classList.remove('audioBtnEnabled');
      pauseBtn.classList.add('audioBtnEnabled');
      pauseBtn.classList.remove('audioBtnDisabled');
    });
  
    pauseBtn.addEventListener("click", () => {
      audio.pause();
      playBtn.classList.add('audioBtnEnabled');
      playBtn.classList.remove('audioBtnDisabled');
      pauseBtn.classList.add('audioBtnDisabled');
      pauseBtn.classList.remove('audioBtnEnabled');
    });

    replayBtn.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
      replayBtn.classList.add('audioBtnDisabled');
      replayBtn.classList.remove('audioBtnEnabled');
      pauseBtn.classList.add('audioBtnEnabled');
      pauseBtn.classList.remove('audioBtnDisabled');
    });

    audio.addEventListener("ended", () => {
      playBtn.classList.add('audioBtnDisabled');
      playBtn.classList.remove('audioBtnEnabled');
      pauseBtn.classList.add('audioBtnDisabled');
      pauseBtn.classList.remove('audioBtnEnabled');
      replayBtn.classList.add('audioBtnEnabled');
      replayBtn.classList.remove('audioBtnDisabled');
    });
    
  }
  