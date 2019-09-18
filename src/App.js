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
  clickRing = (ringId, tower, event) =>  {
    event.preventDefault();

    let $this = this;
    let ring = document.getElementById(ringId);
    let startTower = tower, endTower = tower;
    let startX = event.clientX, startY = event.clientY;
    let endX = 0, endY = 0;

    document.onmousemove = dragRing;
    document.onmouseup = dropRing;
  
    function dragRing(event) {
      endX = event.clientX;
      endY = event.clientY;

      ring.style.left = `${(endX - startX)}px`;
      
      document.onmouseup = dropRing;
    }

    function dropRing() {
      let tower1 = document.getElementById("tower1").offsetLeft;
      let tower2 = document.getElementById("tower2").offsetLeft;
      let tower3 = document.getElementById("tower3").offsetLeft;
      
      document.onmousemove = null;
      document.onmouseup = null;

      let towers = [[4, 3, 2, 1], [5], []];
      $this.props.moveRing(towers);
    }
  }

  resetGame = () => {
    this.props.resetGame();
  }

  render() {
    return (
      <div className="container">
        <h1>Towers of Hanoi</h1>
        <div className="towersContainer">
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
