import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ThankYou(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Thank You!!</Alert.Heading>
        <p>
          Your purchase has been completed. <br></br>
          Your shipment will arrive in 14 bussiness days .<br></br> We at Vak's
          Kick's appreciate that you choose us for making your feet the most
          stylist around. <br></br>
          <strong>Hope to see you again ♥</strong>
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            href="/home"
            onClick={() => {
              props.handleClose();
              setShow(false);
            }}
            variant="outline-success"
          >
            Good Bye
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button variant="dark" onClick={() => setShow(true)}>
          Purchase
        </Button>
      )}
    </>
  );
}

export default ThankYou;
