import React from "react";
import { Col, Row } from "react-bootstrap";

const Details = () => {
  return (
    <section
      style={{ padding: "1rem" }}
      className="details"
      id="section-design"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 className="detailsTitle" style={{ color: "turquoise" }}>
          Premium Design
        </h2>
      </div>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          xs={12}
          md={6}
          lg={3}
        >
          <div style={{ marginBottom: "3rem" }}>
            <h3>Made in the USA</h3>
            <p>
              The lung exerciser device by INHALE is made from high-quality
              components proudly manufactured in the USA. The super flexible
              design may help with many breathing-related ailments.
            </p>
          </div>
          <img
            style={{ marginBottom: "3rem" }}
            height={"200px"}
            width={"200px"}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c33b94fb-f9b5-402d-bf35-287520a8d770.__CR0,0,220,220_PT0_SX220_V1___.jpg"
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          xs={12}
          md={6}
          lg={3}
        >
          <div style={{ marginBottom: "3rem" }}>
            <h3>Durable</h3>
            <p>
              The flexible medical grade silicone mouthpiece is highly durable
              by design. Its heavy-duty components ensure that the breathing
              exerciser stays useful for years to come.
            </p>
          </div>
          <img
            style={{ marginBottom: "3rem" }}
            height={"200px"}
            width={"200px"}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3773bb72-4cd9-48cf-962b-06381caa10a9.__CR0,0,220,220_PT0_SX220_V1___.jpg"
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          xs={12}
          md={6}
          lg={3}
        >
          <div style={{ marginBottom: "3rem" }}>
            <h3>Compact Design</h3>
            <p>
              The inhale respiratory trainer has a highly compact design. With
              its pocket-sized construction, you can easily take it to use
              everywhere you go without any problem whatsoever.
            </p>
          </div>
          <img
            style={{ marginBottom: "3rem" }}
            height={"200px"}
            width={"200px"}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5c178c4f-6ec3-469a-bf7d-2951675ed0b2.__CR0,0,220,220_PT0_SX220_V1___.jpg"
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          xs={12}
          md={6}
          lg={3}
        >
          <div style={{ marginBottom: "3rem" }}>
            <h3>Easy to Clean</h3>
            <p>
              The breathing exercise device is easy to keep clean. Thanks to its
              screw-on design, the pure silicone structure separates into two
              parts ensuring it is cleaned with efficiency and ease.
            </p>
          </div>
          <img
            style={{ marginBottom: "3rem" }}
            height={"200px"}
            width={"200px"}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5ff63687-570c-4000-bce0-6d9134d54dd7.__CR0,0,220,220_PT0_SX220_V1___.jpg"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Details;
