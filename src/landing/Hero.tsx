import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (): void => setShowModal(false);

  return (
    <section
      id="section-hero"
      className="text-center text-white d-flex justify-content-center align-items-center"
    >
      <ContactModal show={showModal} handleClose={handleCloseModal} />
      <Container>
        <h1
          style={{ color: "#ee7600" }}
          className="display-1 text-upercase mt-5"
        >
          Inhale
        </h1>
        <p className="display-4">#1 IN BREATHING FITNESS TRAINING</p>
        <p className="lead">
          Essential for athletes in high respiratory demand sports
        </p>
        <img
          height={"250px"}
          width={"250px"}
          src="https://inhale-breather.s3.us-east-2.amazonaws.com/img3.jpg"
        />
        <Row className="justify-content-center mt-3">
          <Col xs={3}>
            <Button
              style={{ backgroundColor: "#ee7600" }}
              onClick={() => {
                window.location.href =
                  "https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5";
              }}
            >
              Order Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
