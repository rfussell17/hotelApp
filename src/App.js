import React from 'react';
import './App.css';
import Home from './Home';
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <br></br>
      </div>
      <Container>
      <Home />
      <ContactForm />
      </Container>
    </div>
  );
}

export default App;
