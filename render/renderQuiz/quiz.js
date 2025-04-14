function renderQuiz() {
    const section = document.getElementById('quizSection');
    console.log(section);

    const quizHeader = document.createElement('div');
    quizHeader.classList.add('quizHeader');
    quizHeader.innerHTML = `
    <svg width="390" height="165" viewBox="0 0 390 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M389.75 10C389.75 4.61522 385.385 0.25 380 0.25H10C4.6152 0.25 0.25 4.61522 0.25 10V164.656L191.347 102.71C193.397 102.046 195.603 102.044 197.654 102.706L389.75 164.657V10Z" fill="#295969" stroke="black" stroke-width="0.5"/>
<path d="M384.5 14C384.5 8.7533 380.247 4.5 375 4.5H15C9.75333 4.5 5.5 8.7533 5.5 14V157.313L191.252 97.322C193.345 96.6462 195.597 96.6444 197.69 97.3167L384.5 157.314V14Z" stroke="white"/>
<text x="150" y="75"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="20"
        fill="#000000"
        font-family="Arial, sans-serif">
        Lyssnade du noga på samtalet?<br>
        Låt se om du minns va de talade om
  </text>
</svg>
`;
    

    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quizContainer');
    quizContainer.innerHTML = `
    <h4>Fråga 1</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button>`;
    console.log(quizContainer);

    section.appendChild(quizHeader);
    section.appendChild(quizContainer);
}

