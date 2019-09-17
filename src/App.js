import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tower from "./components/tower";
import Ring from "./components/ring";
import { moveRing, resetGame } from "./redux/actions";
import "./App.css";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveRing: towers => dispatch(moveRing(towers)),
    resetGame: () => resetGame()
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

  // Initiates the three towers with all five rings on left-most tower
  getTowers = () => {
    let towers = [];

    for (var i=0; i<3; i++) {
      towers.push(
        <Tower
          towerId={i}
          rings={ i===0 ? [5, 4, 3, 2, 1] : []}
          moveRing={this.moveRing}
        />
      )
    }

    return towers;
  }

  moveRing = (ringId, tower) => {
    console.log(ringId, tower);
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
