function initializeState() {
    const currentState = localStorage.getItem("_state");

    if (!currentState) { 
        const defaultState = {
            1: {
                completed: false,
                answers: []
            },
            2: {
                completed: false,
                answers: []
            },
            3: {
                completed: false,
                answers: []
            },
            4: {
                completed: false,
                answers: []
            },
            5: {
                completed: false,
                answers: []
            }
        };

        localStorage.setItem("_state", JSON.stringify(defaultState));
    }
}
