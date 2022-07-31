import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselSlides from "./CarouselSlides";

const About = () => {
  return (
    <>
      <section id="section-about" className="mt-5">
        <Container>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CarouselSlides />
          </div>
          <h2 className="text-center mt-5 mb-2">Why use Inhale?</h2>
          <h4>
            Receive the best breathing exercise to increase performance in
            running, swimming, gymnastics, martial arts, and any cardiovascular
            workout
          </h4>
        </Container>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col
              style={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                className="about-image"
                src="https://inhale-breather.s3.us-east-2.amazonaws.com/img6.jpg"
              />
            </Col>
            <Col style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <h4 style={{ color: "#00008b" }}>Within Days:</h4>
                <p>
                  Remove airway obstructions and increase oxygen intake,
                  overcoming years of constriction due to aging, pollution, and
                  physical condition
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <h4 style={{ color: "#00008b" }}>Within Months:</h4>
                <p>
                  Develop strong respiratory muscle fibers to dramatically
                  increase air to the longs and exhale carbon dioxide out of the
                  body
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
