import React from "react";
import { Container } from "react-bootstrap";

const Video = () => {
  return (
    <Container>
      <section id="section-video" className="mt-5">
        <div
          style={{ marginTop: "2rem", maxHeight: "600px" }}
          className="ratio ratio-16x9"
        >
          <iframe
            width="800"
            height="451"
            src="https://www.youtube.com/embed/QPfJImLccTQ"
            title="Inhale Respiratory Trainer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default Video;
