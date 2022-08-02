import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";

import { Link } from "react-router-dom";

function MyNavBar(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://i.pinimg.com/564x/b5/f2/8b/b5f28b8f1b12cec04f11658930ca1255.jpg"
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-text-top"
            />
            Vak's kick
          </Navbar.Brand>
          <Nav className="me-auto" fill="true">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
          </Nav>

          <Nav className="mr-auto" fill="true">
            <Nav.Item>
              <Cart
                countCartItems={cartItems.length}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              >
                {" "}
              </Cart>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
