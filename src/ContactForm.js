import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render(props) {
    

    return (
      <div className="ContactForm">
        <h3 className="Book">Book Your Stay Now</h3>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="rooms">Rooms</label>
              <select id="rooms" className="form-control">
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="adults">Adults</label>
              <select id="adults" className="form-control">
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="nights">Nights</label>
              <select id="nights" className="form-control">
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                I am over the age of 19
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Confirm
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
