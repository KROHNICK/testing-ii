import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0
  };

  strike = () => {
    if (this.state.strike <= 2) {
      this.setState({
        strike: this.state.strike + 1
      });
    } else if (this.state.strike === 3) {
      this.setState({
        strike: 0,
        balls: 0
      });
    }
  };

  ball = () => {
    if (this.state.strike <= 3) {
      this.setState({
        ball: this.state.ball + 1
      });
    } else if (this.state.strike === 4) {
      this.setState({
        strike: 0,
        ball: 0
      });
    }
  };

  foul = () => {
    if (this.state.strike < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  hit = () => {
    this.setState({
      strike: 0,
      ball: 0
    });
  };

  render() {
    return (
      <>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="strike">
            <button
              data-testid="strike-btn"
              className="btn"
              onClick={this.strike}
            >
              Strike
            </button>
          </div>
          <div className="ball">
            <button data-testid="ball-btn" className="btn" onClick={this.ball}>
              Ball
            </button>
          </div>
          <div className="foul">
            <button data-testid="foul-btn" className="btn" onClick={this.foul}>
              Foul
            </button>
          </div>
          <div className="hit">
            <button data-testid="hit-btn" className="btn" onClick={this.hit}>
              Hit
            </button>
          </div>
        </div>
      </>
    );
  }
}
