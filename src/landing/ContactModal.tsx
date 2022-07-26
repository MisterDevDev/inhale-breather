import React, { FC } from "react";
import { Form, Modal, Button } from "react-bootstrap";

interface ContactModalProps {
  show: boolean;
  handleClose(): void;
}

const ContactModal: FC<ContactModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <small>First Name</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
            <small>Last Name</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
            <small>Email Address</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <small>Message to Our Team</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} style={{ backgroundColor: "#808080" }}>
          Close
        </Button>
        <Button onClick={handleClose} style={{ backgroundColor: "#539e8a" }}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
