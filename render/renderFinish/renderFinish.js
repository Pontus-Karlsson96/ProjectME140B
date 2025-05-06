function renderFinish() {
    const wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = "";
  
    const rawData = localStorage.getItem("_state");
    if (!rawData) {
      wrapper.innerHTML = "<p>Ingen data hittades.</p>";
      return;
    }
  
    const data = JSON.parse(rawData);
    const totalCorrect = calculateTotalCorrectAnswers();
    
    const scoreDiv = document.createElement('div');
    scoreDiv.innerHTML = `
    <div>
    <h2>Ditt resultat</h2><br>
    <p>${totalCorrect}/15</p>
    </div>
    `
    wrapper.appendChild(scoreDiv);
  
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `
      <h2>Bra jobbat!</h2>
      <p>Snyggt, du har precis upptäckt Limhamn tillsammans med Britta, Lars och Ingvar! Inom snar framtid kommer fler spännande områden att upptäcka.
       Är du nyfiken på att veta mer om RetroResan kan du kika vidare under “om oss” och på vår Instagram @RetroResan!</p>
      <p>Du svarade rätt på <strong>${totalCorrect}</strong> frågor.</p>
    `;
  
    Object.values(data).forEach(location => {
      const locationBlock = document.createElement("section");
      locationBlock.classList.add("location-result");
  
      const answers = location.answers || [];
  
      answers.forEach((answer, index) => {
        const fieldset = document.createElement("fieldset");
        fieldset.classList.add("question-block");
  
        const legend = document.createElement("legend");
        legend.textContent = answer.question;
        fieldset.appendChild(legend);
  
        const answerP = document.createElement("p");
        if (answer.selectedAnswer !== null) {
          const correctness = answer.isCorrect ? "✔️ Rätt svar" : "❌ Fel svar";
          answerP.textContent = `Ditt svar: ${answer.selectedAnswer} — ${correctness}`;
        } else {
          answerP.textContent = "Frågan besvarades inte.";
        }
  
        fieldset.appendChild(answerP);
        locationBlock.appendChild(fieldset);
      });
  
      resultDiv.appendChild(locationBlock);
    });
  
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
  

