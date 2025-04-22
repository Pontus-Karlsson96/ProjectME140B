function renderQuiz(locationObject) {
    const container = document.getElementById('quizContainer');
    console.log(container);
    
    
    const location = locationObject.LOCATION1;
    if (!location || !location.quiz) {
        console.error("Quiz data finns inte för LOCATION1");
        return; 
    }


    const quizHeader = document.createElement('div');
    quizHeader.classList.add('quizHeader');
    quizHeader.innerHTML = `
<h3>Lyssnade du noga på samtalet?</h3>
<p>Låt se om du minns va de talade om</p>
</div>
`;

    const quizBox = document.createElement('form');
    quizBox.classList.add('quizQuestionContainer');

    location.quiz.forEach((quizItem, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('quizQuestion');

        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `Fråga ${index + 1}: ${quizItem.question}`;
        questionContainer.appendChild(questionTitle);

        quizItem.alternatives.forEach((alt, i) => {
            const label = document.createElement('label');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `q${index+1}`;
            radioInput.value = alt.value;
            label.appendChild(radioInput);
            label.appendChild(document.createTextNode(alt.answer));
            questionContainer.appendChild(label);
        });
        quizBox.appendChild(questionContainer);
    });
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
    console.log(popUpConfirm);
    console.log(popUpAbort);
    
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
    
    popUpConfirm.addEventListener("click", ()=>{
        console.log("ja");
        quizLogic();
        popUpContainer.remove();
    })
    
    popUpAbort.addEventListener("click", () => {
        console.log("nej");
        popUpContainer.remove();
    })


    function quizLogic() {
        let score = 0;
    
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1) score += parseInt(q1.value);
    
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q2) score += parseInt(q2.value);
    
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3) score += parseInt(q3.value);
    
        
    
        if (score < 3) {
            console.log(`Du fick ${score} av 3 rätt.`);
        }
    
        else {
            structure.next();
        }
    }
}