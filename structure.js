const main = document.getElementById('main');
const quizContainer = document.getElementById('quizContainer');
let currentObjectId = null; //använd för att spara besökta objekt

const structure = {
    start() {
        main.innerHTML = "";
        quizContainer.innerHTML = "";
        initializeState(); //initialize state with all locations false
        console.log(`Initialize local storage: ${localStorage}`);
        verifyOrder(); //picks out the first location.completed=false and returns the object.
        renderMapLocations();
        getLocation();
        mapFunction();
    },

    renderObject(obj, lat, lon, distance) {
        main.innerHTML = "";
        quizContainer.innerHTML="";

        displayLocationContent(obj, lat, lon, distance);
        renderQuiz(obj, obj.id);
        saveCurrentObject(obj);
    },

    next() {
        main.innerHTML = "";
        quizContainer.innerHTML="";
        verifyOrder();
        renderMapLocations();
        getLocation();
        mapFunction();
    }

};
