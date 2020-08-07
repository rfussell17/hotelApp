import React from "react";
import "./modal.css";
export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  
  render() {

    
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={console.log("clicked")}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    );
  }
}



