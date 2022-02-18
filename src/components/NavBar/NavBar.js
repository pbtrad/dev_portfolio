import React from "react";
import { Navbar, Container, Nav,} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="mx-auto">
  <Navbar.Brand href="#home">Paul Browne</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
};
    

export default NavBar;