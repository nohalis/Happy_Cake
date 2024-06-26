import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link} className="text-white">
            🏠Home
          </Nav.Link>
          <Nav.Link to="/Contacto" as={Link} className="text-white">
            📝Contacto
          </Nav.Link>
        </Nav>
        <Navbar.Brand to="/" as={Link} className="text-white ms-auto">
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigate;
