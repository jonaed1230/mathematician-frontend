import React from "react";
import Button from "../components/Button";
import jwtDecode from "jwt-decode";
import { Session } from "../utils/storage";

class Start extends React.Component {
  state = {
    player: "player",
  };

  clicked = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/";
    } else {
      const decoded = jwtDecode(token);
      Session.set("onlinePlayer", `${decoded.firstName} ${decoded.lastName}`);
      this.props.startPressed();
    }
  };

  render() {
    return (
      <div>
        <div className="App-brandname">
          <i className="fas fa-graduation-cap"></i>
          <br />
          <h3>Do You Know</h3>
          <h1>Math?</h1>
        </div>
        <p>Press to start the game</p>
        <Button isClicked={this.clicked}>Start</Button>
      </div>
    );
  }
}
export default Start;
