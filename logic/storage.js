function initializeState() {
    const currentState = localStorage.getItem("_state");

    if (!currentState) { 
        const defaultState = {
            1: {
                storage_id: 1,
                completed: false,
                questions: [],
                answers: [],
                score: 0,
                lat: 55.57065979970439,
                lon: 12.94175508465805,
            },
            2: {
                storage_id: 2,
                completed: false,
                questions: [],
                answers: [],
                score: 0,
                lat: 55.571957675146884,
                lon: 12.90055784671468,
            },
            3: {
                storage_id: 3,
                completed: false,
                questions: [],
                answers: [],
                score: 0,
                lat: 55.58253967723235,
                lon: 12.926866558119663,
            },
            4: {
                storage_id: 4,
                completed: false,
                questions: [],
                answers: [],
                score: 0,
                lat: 55.58746813358296,
                lon: 12.926203784035609,
            },
            5: {
                storage_id: 5,
                completed: false,
                questions: [],
                answers: [],
                score: 0,
                lat: 55.5871994008723,
                lon: 12.92474667391729,
            }
        };

        localStorage.setItem("_state", JSON.stringify(defaultState));
    }
}


function saveCurrentObject(obj) {
    console.log(obj);

    const currentObject = obj;
    const currentStorage = JSON.parse(localStorage.getItem("_state")); 

    for (let key in currentStorage) { 
   
        if (currentStorage[key].storage_id === currentObject.id) { 
            currentStorage[key].completed = true; 
            

        
        } else if (currentStorage[key.storage_id != currentObject.id]) {

            console.warn("failed to find object");
        }
    }
    localStorage.setItem("_state", JSON.stringify(currentStorage)); 
}

function saveQuizResults(answers, questions, storage_id) {
    const rawState = localStorage.getItem("_state");
    if (!rawState) return;

    const state = JSON.parse(rawState);

    if (!state[storage_id]) {
        console.warn(`storage_id ${storage_id} saknas i state`);
        return;
    }

    state[storage_id].answers = answers;
    state[storage_id].questions = questions;
    state[storage_id].completed = true;

    localStorage.setItem("_state", JSON.stringify(state));
}

    
