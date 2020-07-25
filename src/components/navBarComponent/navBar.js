import React, { Component } from "react";
import './navBar.css'
import {
  Navbar,
  Nav,
} from "react-bootstrap";

class NavBarComponent extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Acerca</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Proyectos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarComponent;
