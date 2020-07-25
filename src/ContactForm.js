import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ContactForm">
        <h3 className="Book">Book Your Stay Now</h3>
      
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Address</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Address"/>
    </div>
  </div>


  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Rooms</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Guests</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Nights</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
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
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        I am over the age of 19
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Confirm</button>
</form>

      </div>
    );
  }
}

export default ContactForm;
