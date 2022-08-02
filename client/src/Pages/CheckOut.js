import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ThankYou from "../components/ThankYou";

function CheckOut(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.17;
  const shippingPrice = itemsPrice > 700 ? 0 : 30;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Check-Out</Card.Header>
        <Card.Body>
          <Card.Title>Order summary:</Card.Title>
          <div>{cartItems.length === 0 && <div> Cart is empty</div>}</div>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">
                <img src={item.img} width="150" height="100" alt="" />
                <br></br>
                <br></br>
              </div>
              <div className="col-8">
                {item.brand} &nbsp;
                {item.model} <br></br>
                {item.qty} x ${item.price.toFixed(2)}
              </div>{" "}
              <div className="col-2">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => onAdd(item)}
                >
                  +
                </Button>
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => onRemove(item)}
                >
                  -
                </Button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-12">
                  {" "}
                  &nbsp; Items Price: &nbsp; ${itemsPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {" "}
                  Tax Price:&nbsp; ${taxPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  Shipping Price: &nbsp; ${shippingPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <strong>
                    {" "}
                    Total Price: &nbsp; ${totalPrice.toFixed(2)}{" "}
                  </strong>
                </div>
                <div className="col-2 text-right"></div>

                <Button variant="dark" onClick={handleShow}>
                  Complete Purchase
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Please fill information below</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Shipping Address:</Form.Label>
                        <br></br>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                        <Form.Label>City:</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                        <Form.Label>Address:</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                        <Form.Label>Zip-Code:</Form.Label>
                        <Form.Control as="textarea" rows={1} />

                        <Form.Label>Credit Card:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                        ></Form.Control>
                        <Form.Label>
                          CVC{" "}
                          <small class="text-muted">
                            {" "}
                            (3 digit in the back of the card){" "}
                          </small>
                        </Form.Label>
                        <Form.Control type="email" placeholder="123" />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Back
                    </Button>

                    <ThankYou handleClose={handleClose} />
                  </Modal.Footer>
                </Modal>
              </div>
            </>
          )}
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-dark" as={Link} to="/Home">
            Continue Shopping
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default CheckOut;
