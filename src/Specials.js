import React, { Component } from "react";
import "./Specials.css";

class Specials extends Component {
  render() {
    return (
      <div className="Specials">
        <h2>{this.props.name}</h2>
        <p>Access to all ammenities</p>
        <p>{this.props.uniqueBonus}</p>
        <div></div>
        <h6>Price: {this.props.price}</h6>
      </div>
    );
  }
}

export default Specials;
