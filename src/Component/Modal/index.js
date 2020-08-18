import React from "react";
import "./modal.css";
export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const outputVal = [];

    for (let i = 0; i < this.props.guests.length; i++) {
      const row = (
        <div key={i}>
          <h1>Booking Confirmed</h1>

          <p>
            Your reservation has been set {this.props.guests[i].firstName}{" "}
            {this.props.guests[i].lastName}!
          </p>
          <p>Rooms: {this.props.guests[i].rooms}</p>
          <p>Nights: {this.props.guests[i].nights}</p>
          <p>Guests: {this.props.guests[i].adults}</p>
          <p>
            A confirmation E-mail will be sent to {this.props.guests[i].email}
          </p>
        </div>
      );
      outputVal.push(row);
    }

    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.props.showModal}>
            &times;
          </span>
          <div>
          {outputVal}
          </div>
        </div>
      </div>
    );
  }
}
