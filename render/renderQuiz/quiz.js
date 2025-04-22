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
    <h4 id="firstQuizTitle">Fråga 1</h4>
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

const footerTextContent = document.createElement('div');
footerTextContent.classList.add('quizFooterContent');

const footerTextContentH4 = document.createElement('h4');
footerTextContentH4.textContent = "Redo att låsa in ditt förslag?";

const quizSubmitBtn = document.createElement("button");
quizSubmitBtn.id = "quizSubmitBtn";
quizSubmitBtn.textContent ="Ja";

footerTextContent.appendChild(footerTextContentH4);
footerTextContent.appendChild(quizSubmitBtn);

footer.appendChild(footerTextContent);
container.appendChild(footer);


quizSubmitBtn.addEventListener("click", () => {
   
    console.log("klick");
    quizPopUp();
});
}


function quizPopUp() {
    const container = document.getElementById("wrapper");
    const popUpContainer = document.createElement('div');
    const popUpText = document.createElement('p');
    const popUpConfirm = document.createElement('button');
    const popUpAbort = document.createElement('button');

    popUpContainer.id = "popUpContainer";
    popUpText.id = "popUpText";
    popUpConfirm.id = "popUpConfirm";
    popUpAbort.id = "popUpAbort";

    popUpText.textContent = "Säkert att du vill låsa in dina svar? Du kan inte ändra eller lyssna i efterhand!";
    popUpConfirm.textContent = "Ja";
    popUpAbort.textContent = "Nej, avbryt";

    popUpContainer.appendChild(popUpText);
    popUpContainer.appendChild(popUpConfirm);
    popUpContainer.appendChild(popUpAbort);

    container.appendChild(popUpContainer);
}