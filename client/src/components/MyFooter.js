import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function MyFooter() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://i.pinimg.com/564x/b5/f2/8b/b5f28b8f1b12cec04f11658930ca1255.jpg"
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-text-top"
            />
            Vak's kicks
          </Navbar.Brand>
          <Nav className="me-auto" fill="true">
            <Nav.Item>
              <SocialIcon network="whatsapp" />
            </Nav.Item>
          </Nav>
          <Nav className="mr-auto" fill="true">
            <Nav.Link as={Link} to="/Contact">
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyFooter;
