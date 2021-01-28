const redux = require("redux");
const createStore = redux.createStore;

const initState = {
    counter: 0,
};

// store
const store = createStore();

// reducer
const rootReducer = (state, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value,
        };
    }
    return state;
};

// dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });

// subscription
store.subscribe(() => {
    
});
