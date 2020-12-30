import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { mapDispatchToProps, mapStateToProps } from "./redux/index";
import Start from "./containers/Start";
import MathQuiz from "./containers/MathQuiz";
import "./App.css";

class App extends Component {
  gameStart = () => {
    this.props.onStartGame();
  };
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/";
    }
    return (
      <div className="App">
        <header className="App-header">
          {!this.props.isStarted ? (
            <Start startPressed={this.gameStart} />
          ) : (
            <MathQuiz {...this.props} gameStart={this.gameStart} />
          )}
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
