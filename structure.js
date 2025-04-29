const main = document.getElementById('main');
const quizContainer = document.getElementById('quizContainer');

const structure = {
    start() {
        initializeState();
        console.log(`init app ${localStorage}`);
        getLocation(trackingActive);
        mapFunction();
    },
    renderObject(obj, lat, lon, distance) {
        main.innerHTML = "";
        quizContainer.innerHTML="";

        displayLocationContent(obj, lat, lon, distance);
        renderQuiz(obj, 1);
    },

    next() {
        main.innerHTML = "";
        quizContainer.innerHTML="";
        getLocation(trackingActive);
        mapFunction();
    }

};
