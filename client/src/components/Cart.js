import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

function Cart(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.17;
  const shippingPrice = itemsPrice > 700 ? 0 : 30;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsCart3 /> &nbsp;
        {cartItems.length ? (
          <Badge bg="danger">{cartItems.length}</Badge>
        ) : (
          " "
        )}{" "}
        &nbsp; My cart &nbsp;
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2> Cart Items</h2>
          <div>{cartItems.length === 0 && <div> Cart is empty</div>}</div>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-3">
                <img
                  src={item.img}
                  width="100"
                  height="100"
                  className="card-img-top"
                  alt=""
                />
              </div>
              <div className="col-7">
                {item.brand} &nbsp;
                {item.model}
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
              <div className="col-4">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-7"> Items Price:</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-7"> Tax Price:</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-7">Shipping Price:</div>
                <div className="col-1 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <strong> Total Price: </strong>
                </div>
                <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
                <Button
                  as={Link}
                  to="/CheckOut"
                  variant="dark"
                  onClick={() => setShow(false)}
                >
                  CheckOut
                </Button>{" "}
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Cart;
