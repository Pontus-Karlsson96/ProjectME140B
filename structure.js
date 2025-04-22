const structure = {
    start() {
        renderQuiz(locationObject);
    },

    next() {
        const main = document.getElementById('main');
        const quizContainer = document.getElementById('quizContainer');
        console.log(quizContainer);
        main.innerHTML = "";
        quizContainer.innerHTML="";
        getLocation(trackingActive);
        mapFunction();

    }


    
};
