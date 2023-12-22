// Navbar.js

import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';



const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="./Home">Mentor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="./Features">Features</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="./LoginForm">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./RegistrationForm">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
