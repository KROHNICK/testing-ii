import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter App</h1>
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
