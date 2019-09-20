import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Tower from "./components/tower";
import Ring from "./components/ring";
import { moveRing, resetGame } from "./redux/actions";
import "./App.css";

const mapStateToProps = (state) => {
  let newState = Object.assign({}, state);
  return newState;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetGame: resetGame,
    moveRing: moveRing,
  }, dispatch)
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
    let towerArr = [];
    let towers = this.props.towers;

    for (var i=0; i<towers.length; i++) {
      let tower = towers[i];
      let ringArr = [];
      for (var j=0; j<tower.length; j++) {
        ringArr.push(
          <Ring
            key={j}
            ringId={tower[j]}
            vertPosition={j}
            tower={i}
            clickRing={this.clickRing}
          />
        );
      }

      towerArr.push(
        <Tower
          key={i}
          id={i}
          towerId={`tower${i}`}
          rings={ringArr}
        />
      );
    }

    return towerArr;
  }
  
  // Allows user to drag and drop rings between towers
  clickRing = (ringId, startTower, event) =>  {
    event.preventDefault();

    let $this = this;
    let ring = document.getElementById(ringId);

    // Get initial tower/ring configuration
    let towers = $this.props.towers;

    // Check if ring is on top of pile and therefore moveable
    if (towers[startTower].indexOf(ringId) === towers[startTower].length - 1) {
      
      // If ring is moveable, initiate event handlers
      document.onmousemove = dragRing;
      document.onmouseup = dropRing;
    }
    else {
      return;
    }

    let startTowerLeft = document.getElementById(`tower${startTower}`).getBoundingClientRect().left;

    // Handles ring being dragged 
    function dragRing(event) {
      ring.style.left = `${(event.clientX - startTowerLeft + 100)}px`;
      ring.style.top = `${(event.clientY - 103)}px`;
      document.onmouseup = dropRing;
    }

    // Handles ring being dropped
    function dropRing() {  

      // Get extents of tower wrappers
      let tower1 = document.getElementById("towerWrapper1").getBoundingClientRect();
      let tower2 = document.getElementById("towerWrapper2").getBoundingClientRect();
      let tower3 = document.getElementById("towerWrapper3").getBoundingClientRect();

      let endTower = startTower;

      // Get center of subject ring
      let ringRect = document.getElementById(ringId).getBoundingClientRect();
      let ringCenter = (ringRect.left + ringRect.right) / 2;

      // Locate center of ring to identify tower on which it was dropped
      if (ringCenter >= tower1.left && ringCenter < tower1.right) {
        endTower = 0;
      } 
      else if (ringCenter >= tower2.left && ringCenter < tower2.right) {
        endTower = 1;
      }
      else if (ringCenter >= tower3.left && ringCenter < tower3.right) {
        endTower = 2;
      }

      // Remove event handlers
      document.onmousemove = null;
      document.onmouseup = null;

      // Call moveRing action
      $this.props.moveRing(startTower, endTower);
    }
  }

  resetGame = () => {
    this.props.resetGame();
  }

  render() {
    return (
      <div className="mainContainer">
        <h1>Towers of Hanoi</h1>
        <div className="towersContainer" id="towersContainer">
          {this.getTowers()}
        </div>
        <div className="resetButton">
          <button
            className="btn btn-danger btn-sm resetButton"
            onClick={this.resetGame}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
