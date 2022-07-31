import React from "react";
import { Carousel, Container } from "react-bootstrap";

const CarouselSlides = () => {
  return (
    <Container>
      <Carousel interval={3000} controls={false} indicators={false}>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://inhale-breather.s3.us-east-2.amazonaws.com/banner1.jpg"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://inhale-breather.s3.us-east-2.amazonaws.com/banner2.jpg"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://inhale-breather.s3.us-east-2.amazonaws.com/banner3.jpg"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://inhale-breather.s3.us-east-2.amazonaws.com/banner4.jpg"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselSlides;
