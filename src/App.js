import React, { Component } from "react";
import Display from "./components/Display/Display.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import "./App.css";

class App extends Component {
  state = {
    atBat: {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hit: 0
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Running</h1>
        </header>
        <main>
          <Display stats={this.state.atBat} />
          <Dashboard
            stats={this.state.atBat}
            addBall={this.addBall}
            subBall={this.subBall}
            addStrike={this.addStrike}
            subStrike={this.subStrike}
            addFoul={this.addFoul}
            subFoul={this.subFoul}
            addHit={this.addHit}
          />
        </main>
      </div>
    );
  }

  addBall = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.balls + 1 >= 4) {
      updatedAtBat.strikes = 0;
      updatedAtBat.balls = 0;
      updatedAtBat.fouls = 0;

      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.balls++;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  subBall = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.balls === 0) {
      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.balls--;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  addStrike = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.strikes + 1 >= 3) {
      updatedAtBat.strikes = 0;
      updatedAtBat.balls = 0;
      updatedAtBat.fouls = 0;

      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.strikes++;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  subStrike = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.strikes === 0) {
      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.strikes--;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  addFoul = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.strikes >= 2) {
      updatedAtBat.fouls++;

      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.fouls++;
      updatedAtBat.strikes++;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  subFoul = () => {
    const updatedAtBat = this.state.atBat;

    if (this.state.atBat.fouls === 0) {
      this.setState({
        atBat: updatedAtBat
      });
    } else {
      updatedAtBat.fouls--;

      this.setState({
        atBat: updatedAtBat
      });
    }
  };

  addHit = () => {
    const updatedAtBat = this.state.atBat;

    updatedAtBat.fouls = 0;
    updatedAtBat.strikes = 0;
    updatedAtBat.balls = 0;

    this.setState({
      atBat: updatedAtBat
    });
  };
}

export default App;
