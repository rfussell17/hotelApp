import React, { Component } from "react";

class Confirmation extends Component {
  render(props) {




    return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>rooms</th>
              <th>adults</th>
              <th>nights</th>
            </tr>
          </thead>
          <tbody>
            {
            console.log("this.props:", this.props.guests),
            console.log("this.props.guests: ", this.props.guests)
            }
          </tbody>
        </table>
    );
  }
}

export default Confirmation;

/* <div className="Home">
      <h1>Success</h1>
      <p>Your stay has been confirmed</p>
      {/*print out name of guest, rooms, nights 
    </div> */
