import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  // Facebook,
  // Instagram,
  // Twitter,
  // Linkedin,
  // Phone,
  Inbox,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-light">
      <Container className="container py-3 py-sm-5">
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <h6>Quick links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#0">Top of the Page</a>
              </li>
              <li>
                <a href="https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5">
                  Order Now
                </a>
              </li>
              <li>
                <a href="mailto:admin@inhalebreathers.com">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} lg={3}></Col>
          <Col xs={12} sm={6} lg={3}></Col>
          <Col xs={12} sm={6} lg={3}>
            <address>
              <strong>Inhale</strong>
              <Inbox />
              <span className="visually-hidden">Mail:</span>{" "}
              <a href="mailto:admin@inhalebreathers.com">
                admin@inhalebreathers.com
              </a>
            </address>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={9}>
            <ul className="list-inline">
              <li className="list-inline-item">2022 Inhale&#8482;</li>
              <li className="list-inline-item">All rights reserved.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
