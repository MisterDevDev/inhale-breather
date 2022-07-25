import React from "react";
import { Container, Navbar, Nav, Button} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="black" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://inhale-breather.s3.us-east-2.amazonaws.com/logo.jpg"
            width={"45px"}
            height={"45px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} href="#section-hero">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#section-about">Product</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#section-coach">About</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#section-pricing">Contact</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#section-reviews"><Button style={{backgroundColor: '#ee7600'}}>Buy Now!</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
