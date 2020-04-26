import React from "react";
import "./App.css";
import "./style.css";
import "../node_modules/@fortawesome/fontawesome-free/css//all.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/root";
import initialReduxState from "./redux/constants/initialState";

// Create the Redux store
const store = createStore(
  rootReducer,
  initialReduxState,
  compose(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
