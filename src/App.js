import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Confirmation from "./Confirmation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [
        {
          firstName: "Ted",
          lastName: "Logan",
          email: "ted@email.com",
          address: "123 Dilworth Drive",
          rooms: 1,
          adults: 2,
          nights: 3,
        },
      ],
      form: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        rooms: "",
        adults: "",
        nights: "",
      },
      isOfAge: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
  }



  updateInputs = (property, value) => {
    const formCopy = Object.assign({}, this.state.form);
    formCopy[property] = value;

    this.setState({
      form: formCopy, property
    });
  };


  handleSubmit(){
   let guestsCopy = [];
    for(let i = 0; i < this.state.guests.length; i++){
      const copy = Object.assign({}, this.state.guests[i]);
      guestsCopy.push(copy);
  }

    let newGuest = {
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      phone: this.state.form.phone,
      email: this.state.form.email,
      address: this.state.form.address,
      rooms: this.state.form.rooms,
      adults: this.state.form.adults,
      nights: this.state.form.nights,
    }
    guestsCopy.push(newGuest)

    this.setState({
      guests: guestsCopy,
      form:
      {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      rooms: "",
      adults: "",
      nights: ""
      },
      isOfAge: ""
    })
  };

  render() {
     console.log("current value of boolean <input>: ", this.state.form.isOfAge);
     console.log("current value of guests: ", this.state.guests);
    return (
      <div className="App">
        <div className="Banner">
          <br></br>
        </div>
        <Container>
          <Home />
          <ContactForm
          form={this.state.form}
          updateInputs={this.updateInputs}
          handleSubmit={this.handleSubmit}
          isOfAge={this.state.isOfAge}/>
          <Confirmation guests={this.state.guests}/>
        </Container>
      </div>
    );
  }
}

export default App;
