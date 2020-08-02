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
      <div>
       <div className="Container">
       <div>{this.props.children}</div>
        <div>
        </div>
       </div>
      </div>
    );
  }
}



