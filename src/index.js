import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import resultsReducer from "./store/reducers/results";
import counterReducer from "./store/reducers/counter";

import "./index.css";

const store = createStore(
    combineReducers({ results: resultsReducer, counter: counterReducer })
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
