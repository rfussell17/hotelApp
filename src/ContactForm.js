import React, { Component } from "react";
import "./ContactForm.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

class ContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ContactForm">
        <h3 className="Book">Book Your Stay Now</h3>
        <form onSubmit={this.onSubmit} className="pb-5">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group float-left">
              <DropdownButton
                id="dropdown-item-button"
                title="Rooms"
              >
                <Dropdown.ItemText>Rooms</Dropdown.ItemText>
                <Dropdown.Item as="button">1</Dropdown.Item>
                <Dropdown.Item as="button">2</Dropdown.Item>
                <Dropdown.Item as="button">3</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group float-right">
              <DropdownButton
                id="dropdown-item-button"
                title="Guests"
              >
                <Dropdown.ItemText>Guests</Dropdown.ItemText>
                <Dropdown.Item as="button">1</Dropdown.Item>
                <Dropdown.Item as="button">2</Dropdown.Item>
                <Dropdown.Item as="button">3</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <button className="btn btn-lg btn-primary" id="submit-button "type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
