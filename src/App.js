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

  constructor(props) {
    super(props);

    this.state = {

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

    let ring = document.getElementById(ringId);
    let startX = event.clientX, startY = event.clientY;
    let endX = 0, endY = 0;

    document.onmousemove = dragRing;
  
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
    }
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
