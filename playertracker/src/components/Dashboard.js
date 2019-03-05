import React, { Component } from "react";
import Display from "./Display";
import { Button } from "reactstrap";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  strike = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      });
    } else if (this.state.strike === 2) {
      this.setState({
        strike: 0,
        ball: 0
      });
    }
  };

  ball = () => {
    if (this.state.ball < 3) {
      this.setState({
        ball: this.state.ball + 1
      });
    } else if (this.state.ball === 3) {
      this.setState({
        strike: 0,
        ball: 0
      });
    }
  };

  foul = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
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
        <Display strike={this.state.strike} ball={this.state.ball} />
        <div className="dashboard">
          <h2>Dashboard</h2>
          <div className="strike">
            <Button
              data-testid="strike-btn"
              className="btn"
              onClick={this.strike}
            >
              Strike
            </Button>
          </div>
          <div className="ball">
            <Button data-testid="ball-btn" className="btn" onClick={this.ball}>
              Ball
            </Button>
          </div>
          <div className="foul">
            <Button data-testid="foul-btn" className="btn" onClick={this.foul}>
              Foul
            </Button>
          </div>
          <div className="hit">
            <Button data-testid="hit-btn" className="btn" onClick={this.hit}>
              Hit
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
