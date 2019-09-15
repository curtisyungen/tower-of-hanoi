import React, { Component } from 'react';
import { connect } from 'react-redux';
import { move, reset } from "./redux.js";
import Ring from "./components/ring";
import Tower from "./components/tower";
import "./App.css";

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({

      });
    }
  };
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  getBoard = () => {
    let board = [];
    let towers = this.props.towers;
    for (var i = 0; i < towers.length; i++) {
      let tower = towers[i];
      let ringArr = [];
      for (var j = 0; j < tower.length; j++) {
        ringArr.push(
          <Ring
            key={j}
            num={tower[j]}
            tower={i}
            position={j}
          />
        )
      }

      board.push(<Tower key={i} num={i} rings={ringArr} />);
    }

    return board;
  }

  render() {
    return (
      <div className="container">
        <h1>Towers of Hanoi</h1>
        <div className="board">
          {this.getBoard}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
