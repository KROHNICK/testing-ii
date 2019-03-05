import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  strike = () => {
    this.setState({
      strike: this.state.strike + 1
    });
  };

  ball = () => {
    this.setState({
      ball: this.state.ball + 1
    });
  };

  foul = () => {
    this.setState({
      foul: this.state.foul + 1
    });
  };

  hit = () => {
    this.setState({
      hit: this.state.hit + 1
    });
  };

  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <div className="strike">
          <h3>{this.state.strike}</h3>
          <button onClick={this.strike}>+ Strike</button>
        </div>
        <div className="ball">
          <h3>{this.state.ball}</h3>
          <button onClick={this.ball}>+ Ball</button>
        </div>
        <div className="foul">
          <h3>{this.state.foul}</h3>
          <button onClick={this.foul}>+ Foul</button>
        </div>
        <div className="hit">
          <h3>{this.state.hit}</h3>
          <button onClick={this.hit}>+ Hit</button>
        </div>
      </>
    );
  }
}
