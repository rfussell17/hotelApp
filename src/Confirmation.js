import React, { Component } from "react";

class Confirmation extends Component {
  render() {
    const outputVal = [];
    for (let i = 0; i < this.props.guests.length; i++) {
      const row = (
          <p key={i}>
          {this.props.guests[i].firstName + " " +
          this.props.guests[i].lastName + " " +
          this.props.guests[i].email + " " +
          this.props.guests[i].email + " " +
          this.props.guests[i].address + " " +
          this.props.guests[i].rooms + " " +
          this.props.guests[i].adults + " " +
          this.props.guests[i].nights}
          </p>
      );
      outputVal.push(row);
    }


    return (

          <h4>
            {outputVal}
          </h4>
    );
  }
}

export default Confirmation;

/* <div className="Home">
      <h1>Success</h1>
      <p>Your stay has been confirmed</p>
      {/*print out name of guest, rooms, nights 
    </div> */
