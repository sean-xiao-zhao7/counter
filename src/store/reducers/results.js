import * as actionTypes from "../actions";

const initState = {
    results: [],
};

const reducer = (state = initState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({
                value: action.counter,
                id: new Date(),
            }),
        };
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        const newResults = state.results.filter(
            (result) => result.id !== action.id
        );
        return {
            ...state,
            results: newResults,
        };
    }

    return state;
};

export default reducer;
