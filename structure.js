const main = document.getElementById('main');
const quizContainer = document.getElementById('quizContainer');
let currentObjectId = null; //använd för att spara besökta objekt

const structure = {
    start() {
        main.innerHTML = "";
        main.classList.add('hide');
        quizContainer.innerHTML = "";
        initializeState(); //initialize state with all locations false
        console.log(`Initialize local storage: ${localStorage}`);
        verifyOrder(); //picks out the first location.completed=false and returns the object.
        renderMapLocations();
        getLocation();
        mapFunction();
        window.scrollTo(0, 0);
    },

    renderObject(obj, lat, lon, distance) {
        main.innerHTML = "";
        main.classList.remove('hide');
        quizContainer.innerHTML="";

        window.scrollTo(0, 0);
        displayLocationContent(obj);
        renderQuiz(obj, obj.id);
        
    },

    reopenObject(obj) {
        main.innerHTML = '';
        main.classList.remove('hide');
        quizContainer.innerHTML = '';

        window.scrollTo(0, 0);
        displayLocationContent(obj);
        renderNextBtn();
    },

    reopenCards() {
        main.innerHTML = "";
        main.classList.remove("hide");
        quizContainer.innerHTML = "";
        renderMapLocations();
        window.scrollTo(0, 0);

    },

    next() {
        main.innerHTML = "";
        main.classList.add('hide')
        quizContainer.innerHTML="";
        window.scrollTo(0, 0);

        const nextLocation = verifyOrder();

        if (!nextLocation) {
            console.warn("Alla moment avklarade");
            this.finish();
            gameDone = true;
            return;
        }

        renderMapLocations();
        getLocation();
        mapFunction();
    },

    finish() {
        main.classList.add("hide");
        renderFinish()

    }

};
