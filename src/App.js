import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Tower from "./components/tower";
import Ring from "./components/ring";
import { moveRing, resetGame } from "./redux/actions";
import "./App.css";

const mapStateToProps = (state, ownProps) => {
  return {
    towers: state.towers,
  }
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

  constructor(props) {
    super(props);

    this.state = {
      towers: null,
    }
  }

  // Initiates the three towers with all five rings on left-most tower
  getTowers = () => {
    let towers = [];

    for (var i=0; i<3; i++) {
      towers.push(
        <Tower
          key={i}
          id={i}
          towerId={`tower${i+1}`}
          rings={ i===0 ? [5, 4, 3, 2, 1] : []}
          clickRing={this.clickRing}
        />
      )
    }

    return towers;
  }
  
  // Allows user to drag and drop rings between towers
  clickRing = (ringId, startTower, event) =>  {
    event.preventDefault();

    let $this = this;
    let ring = document.getElementById(ringId);
    let startX = event.clientX;
    let endX = 0;

    document.onmousemove = dragRing;
    document.onmouseup = dropRing;
  
    function dragRing(event) {
      endX = event.clientX;

      ring.style.left = `${(endX - startX)}px`;
      document.onmouseup = dropRing;
    }

    function dropRing() {

      // Get center of subject ring
      let ringRect = document.getElementById(ringId).getBoundingClientRect();
      let ringCenter = (ringRect.left + ringRect.right) / 2;

      // Get extents of tower wrappers
      let tower1 = document.getElementById("towerWrapper1").getBoundingClientRect();
      let tower2 = document.getElementById("towerWrapper2").getBoundingClientRect();
      let tower3 = document.getElementById("towerWrapper3").getBoundingClientRect();

      // Get initial tower/ring configuration
      let towers = $this.props.towers;
      let endTower = startTower;
     
      // Locate center of ring when dropped to identify tower on which it was dropped
      if (ringCenter >= tower1.left && ringCenter < tower1.right) {
        endTower = 0;
      } 
      else if (ringCenter >= tower2.left && ringCenter < tower2.right) {
        endTower = 1;
      }
      else if (ringCenter >= tower3.left && ringCenter < tower3.right) {
        endTower = 2;
      }

      // Remove ring from starting tower
      let idx = towers[startTower].indexOf(ringId);
      towers[startTower].splice(idx, 1);
    
      // Place ring on ending tower
      towers[endTower].push(ringId);

      document.onmousemove = null;
      document.onmouseup = null;

      $this.props.moveRing(towers);
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
