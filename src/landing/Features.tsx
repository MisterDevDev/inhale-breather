import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Features = () => {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                maxHeight: "600px",
              }}
            >
              <img
                style={{ marginBottom: "5px" }}
                height={"300px"}
                width={"325px"}
                src="https://inhale-breather.s3.us-east-2.amazonaws.com/AdobeStock_399040842.jpeg"
              />
              <img
                height={"300px"}
                width={"325px"}
                src="https://inhale-breather.s3.us-east-2.amazonaws.com/dimension_pic.jpg"
              />
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h4 style={{ marginBottom: "1rem" }} className="featuresTitle">
                Design Features
              </h4>
            </div>
            <p>
              PURE SILICONE STRUCTURE - <br />
              Our lung exerciser device is made up of super flexible pure
              silicone material. It helps in comprehensive respiratory muscle
              training in a wide range of patients and people. Our compact
              device is designed for comfortable and convenient use.
            </p>
            <p>
              ADJUSTABLE RESISTANCE - <br /> You can adjust the pressure levels
              on your breathing lung exerciser. According to your lung capacity
              and results, regulate your flow valve and practice breathing
              activity. Find the level of resistance that suits your training
              and adjust it.
            </p>
            <p>
              SCREW-ON DESIGN -<br /> The pure silicon material separates into
              two separate parts easily. This allows for an easy cleaning
              process while maintaining incredibly durable components. With
              quality components and relatively low cost compared to other
              breathers, this product offers the best value on the market.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
