function initializeState() {
    const currentState = localStorage.getItem("_state");

    if (!currentState) { 
        const defaultState = {
            1: {
                storage_id: 1,
                completed: false,
                answers: [],
                score: 0,
            },
            2: {
                storage_id: 2,
                completed: false,
                answers: [],
                score: 0,
            },
            3: {
                storage_id: 3,
                completed: false,
                answers: [],
                score: 0,
            },
            4: {
                storage_id: 4,
                completed: false,
                answers: [],
                score: 0,
            },
            5: {
                storage_id: 5,
                completed: false,
                answers: [],
                score: 0,
            }
        };

        localStorage.setItem("_state", JSON.stringify(defaultState));
    }
}


function saveCurrentObject(obj) {

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

function saveQuizResults(answers, storage_id) {
    
    
        const rawState = localStorage.getItem("_state");
        if (!rawState) return;
    
        const state = JSON.parse(rawState);
    
        if (!state[storage_id]) {
            console.warn(`storage_id ${storage_id} saknas i state`);
            return;
        }
    
        state[storage_id].answers = answers;
        state[storage_id].completed = true;
    
        localStorage.setItem("_state", JSON.stringify(state));
        
    }
    
