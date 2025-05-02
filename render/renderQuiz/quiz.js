function renderQuiz(locationObject, storage_id) {
    const container = document.getElementById('quizContainer');
    console.log(locationObject);

    const location = locationObject;
    if (!location || !location.quiz) {
        console.error("Quiz data finns inte för LOCATION1");
        return;
    }

    const quizHeader = document.createElement('div');
    quizHeader.classList.add('quizHeader');
    quizHeader.innerHTML = `
        <h3>Lyssnade du noga på samtalet?</h3>
        <p>Låt se om du minns vad de talade om</p>
    `;

    const quizBox = document.createElement('form');
    quizBox.classList.add('quizQuestionContainer');

    location.quiz.forEach((quizItem, index) => {
        const questionContainer = document.createElement('fieldset');
        questionContainer.classList.add('quizQuestion');

        const questionTitle = document.createElement('legend');
        questionTitle.innerHTML = `Fråga ${index + 1}: <br> ${quizItem.question}`;
        questionContainer.appendChild(questionTitle);

        quizItem.alternatives.forEach((alt) => {
            const label = document.createElement('label');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `q${index + 1}`;
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
    quizSubmitBtn.textContent = "Ja";

    footerTextContent.appendChild(footerTextContentH4);
    footerTextContent.appendChild(quizSubmitBtn);

    footer.appendChild(footerTextContent);
    container.appendChild(footer);

    quizSubmitBtn.addEventListener("click", () => {
        console.log("klick");
        quizPopUp(locationObject.quiz, storage_id);
    });
}

function quizPopUp(quizData, storage_id) {
    const container = document.getElementById("wrapper");

    // Skapa overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    // Skapa popup
    const popUpContainer = document.createElement('section');
    popUpContainer.id = "popUpContainer";
    popUpContainer.style.position = 'fixed';
    popUpContainer.style.top = '50%';
    popUpContainer.style.left = '50%';
    popUpContainer.style.transform = 'translate(-50%, -50%)';
    popUpContainer.style.zIndex = '1000';
    popUpContainer.setAttribute('role', 'dialog');
    popUpContainer.setAttribute('aria-modal', 'true');

    const popUpText = document.createElement('p');
    popUpText.id = "popUpText";
    popUpText.textContent = "Säkert att du vill låsa in dina svar? Du kan inte ändra eller lyssna i efterhand!";

    const popUpConfirm = document.createElement('button');
    popUpConfirm.id = "popUpConfirm";
    popUpConfirm.textContent = "Ja";

    const popUpAbort = document.createElement('button');
    popUpAbort.id = "popUpAbort";
    popUpAbort.textContent = "Nej, avbryt";

    popUpContainer.appendChild(popUpText);
    popUpContainer.appendChild(popUpConfirm);
    popUpContainer.appendChild(popUpAbort);

    container.appendChild(popUpContainer);

    popUpConfirm.addEventListener("click", () => {
        console.log("ja");
        console.log(quizData);
        const results = quizLogic(quizData);
        console.log(results);
        saveQuizResults(results.answers, storage_id);
        popUpContainer.remove();
        overlay.remove();
    });

    popUpAbort.addEventListener("click", () => {
        console.log("nej");
        popUpContainer.remove();
        overlay.remove();
    });
}

//behöver kallas med nuvarande object.quiz
function quizLogic(quizData) {
    let score = 0;
    const answers = [];

    quizData.forEach((quizItem, index) => {
        const name = `q${index + 1}`;
        const selected = document.querySelector(`input[name="${name}"]:checked`);

        if (selected) {
            const selectedValue = parseInt(selected.value, 10);
            const isCorrect = selectedValue === 1;
            score += selectedValue;

            answers.push({
                question: quizItem.question,
                selectedAnswer: selected.value,
                isCorrect: isCorrect,
                points: selectedValue
            });
        } else {
            answers.push({
                question: quizItem.question,
                selectedAnswer: null,
                isCorrect: false,
                points: 0
            });
        }
        
    })
return {answers, score}
};
