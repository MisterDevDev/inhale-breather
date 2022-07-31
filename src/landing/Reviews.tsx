import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <section id="section-reviews" className="mt-5">
      <Row className="mb-3" style={{ padding: "0.75rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Amazon Reviews</h2>
        </div>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                Many articles recently have recommended respiratory training as
                a great way to lower blood pressure and improve lung capacity.
                This device was the most budget friendly and simple to use. I
                would highly recommend it for anyone wanting to try breathing
                exercises without spending a small fortune.
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Margret Raborn
              <time dateTime="2020-09-01T12:00">(July 14, 2021)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                I like the ease of use and how easy it is to use it. I've been
                training to run my first 5k and wanted increase my lung
                capacity. It is so simple with the device, my lungs get a great
                workout
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              J&MGuerra
              <time dateTime="2020-09-01T12:00">(January 29, 2022)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                Its a well made simple device which works well. It fit my mouth
                perfectly. I use it whenever I need to do deep breathing
                exercises in order to calm myself whenever I am stressed/
                anxious and being able to hear my inhale and exhale with this
                device helps me to relax better. With more use I expect to
                strengthen my breathing muscle.
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Sal Sira
              <time dateTime="2020-09-01T12:00">(September 7, 2021)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                The structure is made of silicone and safe and easy to use. It
                has multiple options for respiratory breathing. I am using it
                with my physical fitness training especially running. It is easy
                to use and operate. I like that it is good to use for meditation
                as well.
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Francis Monroe
              <time dateTime="2020-09-01T12:00">(July 27, 2021)</time>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </section>
  );
};

export default Reviews;
