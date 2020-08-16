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
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close"
            onClick={this.props.showModal}
           >
            &times;
          </span>
         <h1>Booking Confirmed</h1>
          <p>
            Your reservation has been set {this.props.form.firstName}{" "}
            {this.props.form.lastName}!
          </p>
          <p>Rooms: {this.props.form.rooms}</p>
          <p>Nights: {this.props.form.nights}</p>
          <p>Guests: {this.props.form.adults}</p>
          <p>A confirmation E-mail will be sent to {this.props.form.email}</p>
          
        </div>
      </div>
    );
  }
}
