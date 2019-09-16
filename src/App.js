import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tower from "./components/tower";
import Ring from "./components/ring";
import "./App.css";

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

// ====================================================================
// REDUX DATA FLOW
// 1) An action occurs: store.dispatch(action).
// 2) Redux store calls the reducer function, passing the current state and the action.
// 3) The root reducer may combine the output of multiple reducers into a single state tree.
// 4) The Redux store saves the complete state tree returned by the root reducer.
// ====================================================================

class App extends Component {

  getTowers = () => {
    let towers = [];

    for (var i=0; i<3; i++) {
      towers.push(
        <Tower
          key={i}
          id={i}
          rings={[]}
        />
      )
    }

    return towers;
  }

  render() {
    return (
      <div className="container">
        <h1>Towers of Hanoi</h1>
        <div className="towersContainer">
          {this.getTowers()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
