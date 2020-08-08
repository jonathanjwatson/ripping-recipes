import React, { Component } from "react";
import "./Home.css";
import Logo from "../../images/logo512.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1>Welcome to Ripping Recipes!</h1>
            <img src={Logo} alt="Ripping Recipes Logo" className="home-logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
