import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = (): void => setShowModal(false)

  return (
    <section
      id="section-hero"
      className="text-center text-white d-flex justify-content-center align-items-center py-5"
    >  
      <ContactModal show={showModal} handleClose={handleCloseModal}/>
      <Container>
        <h1 style={{color:'#539e8a'}} className="display-1 text-upercase mt-5">YTTS</h1>
        <p className="display-4">#1 IN BREATHING FITNESS TRAINING</p>
        <p className="lead">
          Essential for athletes in high respiratory demand sports
        </p>
        <p>
          <strong>Buy Now</strong>
        </p>
        <Button 
        style={{backgroundColor:'#539e8a'}}
        onClick={() => {
          window.location.href = "https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5"
        }}
        >
          Contact Me
        </Button>
      </Container>
    </section>
  );
};
export default Hero;
