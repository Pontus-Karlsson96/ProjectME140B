function renderQuiz() {
    const container = document.getElementById('quizContainer');

    console.log(container);

    const quizHeader = document.createElement('div');
    quizHeader.classList.add('quizHeader');
    quizHeader.innerHTML = `
<h3>Lyssnade du noga på samtalet?</h3>
<p>Låt se om du minns va de talade om</p>
</div>
`;



    const quizBox = document.createElement('div');
    quizBox.classList.add('quizQuestionContainer');
    quizBox.innerHTML = `
    <div><h4>Fråga 1</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>
    
    <div><h4>Fråga 2</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>
    
    <div><h4>Fråga 3</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>`;

    
    container.appendChild(quizHeader);
    container.appendChild(quizBox);
}

