import React, { Component } from 'react';
import { createStore } from "redux";
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
      break;
  }
  return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 80
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
