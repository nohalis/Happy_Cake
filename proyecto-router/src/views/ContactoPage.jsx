import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactoPage = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <h2 className="text-center mb-4">
        Cuentanos, ¿En qué te podemos ayudar?
      </h2>
      <Form style={{ width: "100%", maxWidth: "600px" }}>
        <Form.Group className="text-center mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="text-center mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe tu consulta"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactoPage;
