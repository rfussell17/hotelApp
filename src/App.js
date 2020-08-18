import React, { Component } from "react";
import Home from "./Home";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import "./App.css";
import "./ContactForm.css";
import SpecialsRow from "./SpecialsRow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [],
      form: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        rooms: "",
        adults: "",
        nights: "",
      },
      isOfAge: true,
      show: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  updateInputs = (property, value) => {
    const formCopy = Object.assign({}, this.state.form);
    formCopy[property] = value;

    this.setState({
      form: formCopy,
      property,
    });
  };

  handleSubmit() {
    let guestsCopy = [];
    for (let i = 0; i < this.state.guests.length; i++) {
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
    };
    guestsCopy.push(newGuest);

    this.setState({
      guests: guestsCopy,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        rooms: "",
        adults: "",
        nights: "",
      },
      isOfAge: "",
      show: true,
    });
  }

  handleCheckbox = (e) => {
    this.setState({
      isOfAge: e.target.checked,
    });
  };

  showModal = (e) => {
      e.stopPropagation();
      this.setState({ show: false,
      guests: [] });
      console.log("clicked")
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Home />
          <SpecialsRow />
          <Modal 
           showModal={this.showModal}
           show={this.state.show}
           form={this.state.form} 
           guests={this.state.guests}>
           </Modal>
 
          <ContactForm
            form={this.state.form}
            updateInputs={this.updateInputs}
            handleSubmit={this.handleSubmit}
            handleCheckbox={this.handleCheckbox}
            isOfAge={this.state.isOfAge}
            showModal={this.showModal}
          />
          {/* <Confirmation guests={this.state.guests} /> */}
        </Container>
      </div>
    );
  }
}

export default App;
