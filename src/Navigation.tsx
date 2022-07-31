import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

interface NavigationProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Navigation: FC<NavigationProps> = ({ setShowModal }) => {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
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
            <Nav.Link style={{ color: "white" }} href="#section-about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#section-design">
              Design
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#section-reviews">
              Reviews
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#section-video">
              Video
            </Nav.Link>
            <Nav.Link
              onClick={() => setShowModal(true)}
              style={{ color: "white" }}
              href="#section-reviews"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5"
            >
              Order Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
