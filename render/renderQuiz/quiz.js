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
    <h4>Fråga 1</h4>
    <div id="firstQuizBox">
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>
    
    <div><h4>Fråga 2</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>
    
    <div id="lastQuizBox"><h4>Fråga 3</h4>
    <button>Svar 1</button>
    <button>Svar 2</button>
    <button>Svar 3</button></div>`;

    
    container.appendChild(quizHeader);
    container.appendChild(quizBox);


const footer = document.createElement('div');
footer.classList.add("quizFooter");
footer.innerHTML = `<div class="quizFooterContent"><h4>Redo att låsa in ditt förslag?</h4>
<button id=quizSubmitBtn>Ja</button></div>`;
container.appendChild(footer);

}