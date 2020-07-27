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
          isOfAge: true
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
        isOfAge: false
      },
    };
  }


  updateInputs = (property, value) => {
    const formCopy = Object.assign({}, this.state.form);

    formCopy[property] = value;

    this.setState({
      form: formCopy, property
    });
  };

  render() {
     console.log("current value of name <input>: ", this.state.form.firstName);
     console.log("current value of guests: ", this.state.guests);
    return (
      <div className="App">
        <div className="Banner">
          <br></br>
        </div>
        <Container>
          <Home />
          <ContactForm form={this.state.form}
          updateInputs={this.updateInputs}/>
          <Confirmation guests={this.state.guests}/>
        </Container>
      </div>
    );
  }
}

export default App;
