import React from "react";
import { Navbar, Container, Nav,} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="mx-auto">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link className="text-white px-5 fs-5" href="#projects">Projects</Nav.Link>
      <Nav.Link className="text-white px-5 fs-5" href="#contact">Contact</Nav.Link>
      <Nav.Link className="text-white px-5 fs-5" href="https://github.com/pbtrad">GitHub</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
};
    

export default NavBar;