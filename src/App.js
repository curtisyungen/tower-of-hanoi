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

    // Loop through each tower array and render its rings
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

      // Push each individual tower into the main tower array
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

    // Check if selected ring is on top of pile and therefore moveable
    if (towers[startTower].indexOf(ringId) === towers[startTower].length - 1) {
      
      // If ring is moveable, initiate event handlers
      document.onmousemove = dragRing;
      document.onmouseup = dropRing;
    }
    else {
      return;
    }

    // Get starting coordinates of selected ring
    let startX = ring.offsetLeft, startY = ring.offsetTop;

    // Get height of selected ring
    let ringHeight = ring.offsetHeight;

    // Get lateral and vertical position of towersContainer
    let containerLeft = document.getElementById("towersContainer").offsetLeft;
    let containerOffsetTop = document.getElementById("towersContainer").offsetTop;

    // Get left coordinate of starting tower
    let startTowerLeft = document.getElementById(`tower${startTower}`).getBoundingClientRect().left;

    // Handle ring dragging
    function dragRing(event) {
      ring.style.left = `${(event.clientX - startTowerLeft + containerLeft + 100)}px`;
      ring.style.top = `${(event.clientY - containerOffsetTop - ringHeight)}px`;
      document.onmouseup = dropRing;
    }

    // Handle ring being dropped
    function dropRing() {  

      // Get extents of tower wrappers
      let tower1 = document.getElementById("towerWrapper1").getBoundingClientRect();
      let tower2 = document.getElementById("towerWrapper2").getBoundingClientRect();
      let tower3 = document.getElementById("towerWrapper3").getBoundingClientRect();

      // Get center of subject ring
      let ringRect = document.getElementById(ringId).getBoundingClientRect();
      let ringCenter = (ringRect.left + ringRect.right) / 2;

      let endTower = startTower;

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
      else {
        endTower = startTower;
      }

      // Remove event handlers
      document.onmousemove = null;
      document.onmouseup = null;

      // If ring is dropped on starting tower, snap it back to its original position
      if (startTower === endTower) {
        ring.style.left = `${startX}px`;
        ring.style.top = `${startY}px`;
        return;
      }

      // If ring is dropped on a ring of lesser value, prevent move and snap back to its original position
      if (towers[endTower].slice(-1)[0] < towers[startTower].slice(-1)[0]) {
        alert("Cannot place a larger ring on a smaller one.");
        ring.style.left = `${startX}px`;
        ring.style.top = `${startY}px`;
        return;
      }

      // Call moveRing action
      $this.props.moveRing(startTower, endTower);

      // Check if game is complete
      $this.checkIfComplete();
    }
  }

  // Checks if right-most tower has five rings, which would signal game completion
  checkIfComplete = () => {
    let towers = this.props.towers;
    if (towers[2].length === 5) {
      alert("You did it. Cool.");
    }
  }

  // Resets the game to initial conditions
  resetGame = () => {
    this.props.resetGame();
  }

  render() {
    return (
      <span>
        <div className="mainContainer">

          {/* Title */}
          <h1>Towers of Hanoi</h1>
          <p className="lead">Move all five rings to the rightmost tower.</p>

          {/* Towers */}
          <div className="towersContainer" id="towersContainer">
            {this.getTowers()}
          </div>

          {/* Reset Button */}
          <div className="resetButton">
            <button
              className="btn btn-danger btn-sm resetButton"
              onClick={this.resetGame}
            >
              Reset
            </button>
          </div>

          {/* Moves Counter */}
          <div className="movesCounter">
            {this.props.moves}
            <p className="minMoves">This puzzle can be solved in 31 moves.</p>
          </div>

        </div>
        
        <div className="mobileView">
          <p className="mobileMsg">Screen must be wider than 520px pixels to view application.</p>
        </div>
      </span>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
