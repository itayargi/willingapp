import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import onborading2 from "../pics/Onboarding_02.png";
import "./OnBoarding2.css";

export default class OnBoarding2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="firstPart">
          <img className="pic" src={onborading2}></img>
        </div>
        <div className="middlePart">
          <div className="kituv">
            <h3>סגירת בקשה</h3>
            <p>עזרו לך? אפשר לסגור את הבקשה שלא יפנו אליך יותר</p>
          </div>
        </div>
        <div className="buttons">
          <div className="row">
            <div className="col-4">
              <button onClick={this.props.nextAction}>skip</button>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <button onClick={this.props.nextAction}>--></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
