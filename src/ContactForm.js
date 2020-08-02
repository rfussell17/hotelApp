import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    

    return (
      <div className="ContactForm">
        <h3 className="Book">Book Your Stay Now</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={this.props.form.firstName}
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                value={this.props.form.lastName}
                placeholder="Last Name"
                onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                value={this.props.form.email}
                placeholder="Email"
                onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="address"
                value={this.props.form.Address}
                placeholder="Address"
                onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="rooms">Rooms</label>
              <select id="rooms" className="form-control" name="rooms" value={this.props.form.rooms} onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}>
                
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="adults">Adults</label>
              <select id="adults" className="form-control" name="adults" value={this.props.form.adults} onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}>
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="nights">Nights</label>
              <select id="nights" className="form-control" name="nights" value={this.props.form.nights} onChange={(e) => {this.props.updateInputs(e.target.name, e.target.value)}}>
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
                type="checkbox"
                name="isOfAge"
                className="form-check-input"
                id="isOfAge"
                checked={this.props.isOfAge}
                onChange={this.props.handleCheckbox}
              />

              <label className="form-check-label" htmlFor="isOfAge">
                I am over the age of 19
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit} onClick={this.Confirmation}>
            Confirm
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
