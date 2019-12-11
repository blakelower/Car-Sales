import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { carReducer } from "./state/reducers";
import "bulma/css/bulma.css";
import "./styles.scss";

const mainReducer = combineReducers({
  // what keys? One per slice, choosing pretty names
  car: carReducer
});

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  rootElement
);
