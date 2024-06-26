import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container
      className="contacto d-flex flex-column justify-content-center align-items-center w-100"
      style={{ minHeight: "90vh" }}
    >
      {}
      <h1 className="titulo-home">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      {}
      <p className="frase-home"> El lugar de los pasteles felices </p>
      {}
      <h2 className="icono-torta">🎂</h2>
    </Container>
  );
};

export default HomePage;
