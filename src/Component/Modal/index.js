import React from "react";
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
        <div>{this.props.children}</div>
        <div>
          <button
            onClose={(e) => {
              this.onClose(e);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
