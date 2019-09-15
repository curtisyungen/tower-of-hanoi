import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import './App.css';

const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case "SUBTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload],
        };
      break;
  }
  return state;
}

const userReducer = (state = {
  name: "Curtis",
  age: 29,
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "SET_AGE":
        state = {
          ...state,
          age: action.payload,
        };
      break;
  }
  return state;
}

const myLogger = (store) => (next) => (action) => {
  console.log("Logged action", action);
  next(action);
}

const store = createStore(
  combineReducers({mathReducer, userReducer}), 
  {}, 
  applyMiddleware(logger)
);

// store.subscribe(() => {
//   console.log("Store updated", store.getState());
// });

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 80
});

store.dispatch({
  type: "SET_AGE",
  payload: 30
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
