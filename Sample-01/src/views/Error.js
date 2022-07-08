import React, { Component } from "react";
import { Button } from "reactstrap";

class Error extends Component {
  render() {
    return (
      <div className="error-page-wrapper">
        <div className="text-center hero-wrapper">
          <div>
            <img className="mb-3" src="https://clipart.world/wp-content/uploads/2020/08/cruise-ship-logo-png-transparent.png" alt="Cruise0" height="120" />
          </div>
          <div className="text-left">
            <h1 className="mb-4">{this.props.message}</h1>
            <Button className="error-page-btn" id="qsLoginBtn" color="primary" block href="/">Go Back</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
