import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function App() {

  return (
     <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Project Manage System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#link">Task</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown" align="end" menuVariant="light">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">
                My Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}