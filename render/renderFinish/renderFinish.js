function renderFinish() {
    const wrapper = document.getElementById('wrapper');
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
      mapContainer.innerHTML = '';
      mapContainer.classList.add('hide');
    }

    const main = document.getElementById('main');
    if (main) {
      main.innerHTML = '';
      main.classList.add('hide');
    }
  
    const rawData = localStorage.getItem("_state");
    if (!rawData) {
      wrapper.innerHTML = "<p>Ingen data hittades.</p>";
      return;
    }
  
    const data = JSON.parse(rawData);
    const totalCorrect = calculateTotalCorrectAnswers();
    
    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'scoreDiv';
    scoreDiv.innerHTML = `
    <div class='circle'>
    <h2>Ditt resultat</h2><br>
    <h1>${totalCorrect}/15</h1>
    </div>
    <p>Se alla dina svar nedan</p>
    <div> <img src='https://pontus-karlsson96.github.io/ProjectME140B/media/finalscreenimg1.svg'> <img src='https://pontus-karlsson96.github.io/ProjectME140B/media/finalscreenimg2.svg'> </div>
    `;
    wrapper.appendChild(scoreDiv);
  
    const resultDiv = document.createElement("div");
    resultDiv.id = 'resultDiv';
    resultDiv.innerHTML = `
    <div class='resultDivInfo'>
      <h2>Bra jobbat!</h2>
      <p>Snyggt, du har precis upptäckt Limhamn tillsammans med Britta, Lars och Ingvar! Inom snar framtid kommer fler spännande områden att upptäcka.
       Är du nyfiken på att veta mer om RetroResan kan du kika vidare under “om oss” och på vår Instagram @RetroResan!</p>
       <img src="../media/icons/placeholderIcon.svg">
      <p>Om oss <br> Instagram @RetroResan</p>
    </div>
    `;

    const resultQuizHeader = document.createElement('div');
    resultQuizHeader.classList.add('quizHeader');
    resultQuizHeader.innerHTML = `
    <h3>Se alla rätta svar</h3>
    <p>Alla frågor med rätt svar och ditt svar</p>
    `;
    resultDiv.appendChild(resultQuizHeader);

    //det borde vara [i].question[0] för frågan
    //och [i].answers[j] if value: 0 classlist.add wrong else right
    let iQuestion = 1;
    Object.values(data).forEach(location => {
      const locationBlock = document.createElement("section");
      locationBlock.classList.add("location-result");
  
      const answers = location.answers;
  
      answers.forEach((answer, index) => {
        const fieldset = document.createElement("fieldset");
        fieldset.classList.add("question-block");
  
        const legend = document.createElement("div");
        legend.classList.add("legend");
        legend.innerHTML = `<strong>Fråga ${iQuestion}:</strong><br><em>${answer.question}</em>`;
        fieldset.appendChild(legend);


        fieldset.appendChild(legend);

        const questionData = location.questions[index];
        questionData.alternatives.forEach((alt) => {
          const altP = document.createElement('p');
          altP.textContent = alt.answer;
        
          if (alt.value === 1) {
            altP.classList.add("right");
          }
        
          if (alt.answer === answer.selectedAnswer) {
            altP.classList.add("yourAnswer");
            if (alt.value === 0) {
              altP.classList.add("wrong");
            }
          }
        
          fieldset.appendChild(altP);
        });
        
  
        
  
        locationBlock.appendChild(fieldset);
        iQuestion++;
      });

      

      
  
      resultDiv.appendChild(locationBlock);
    });

    const btn = document.createElement('button');
      btn.classList.add('reopenBtn');
      btn.textContent = 'Ta mig till toppen';

      
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        mapContainer.innerHTML = '';
        main.innerHTML = '';
        structure.reopenCards();
      })
      
      
      resultDiv.appendChild(btn);
    wrapper.appendChild(resultDiv);
  }
  

    

function calculateTotalCorrectAnswers() {
    const rawData = localStorage.getItem("_state");
    if (!rawData) {
      console.warn("Ingen data i localStorage.");
      return 0;
    }
  
    const data = JSON.parse(rawData);
    let correctCount = 0;
  
    Object.values(data).forEach(location => {
      const answers = location.answers || [];
      answers.forEach(answer => {
        if (answer.isCorrect) {
          correctCount++;
        }
      });
    });
  
    return correctCount;
  }
  

