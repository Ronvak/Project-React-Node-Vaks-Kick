import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Range from "./Range";

import Form from "react-bootstrap/Form";
let brands = [
  {
    brand: "Nike",
    checked: "false",
  },
  {
    brand: "Nike",
    checked: "false",
  },
];
function brandsPass(brand) {
  return brands[0];
}
function CheckExample(props) {
  const [checked, setChecked] = useState([false, false, false]);
  return (
    <Form>
      {["Nike", "Adidas", "Reebok", props.brand].map((type) => (
        <div key={`default-checkbox`} className="mb-3">
          <Form.Check
            onChange={() => console.log(type)}
            type={"checkbox"}
            //checked={checked}
            id={`-${type}`}
            label={` ${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

function SortingModal(props) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setSmShow(true)} className="me-2">
        Sort & filter
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sort & filter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Range></Range>
          Show only:
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check type={type} id={`default-${type}`} label={`Nike`} />
              </div>
            ))}
          </Form>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Adidas`}
                />
              </div>
            ))}
          </Form>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Reebok`}
                />
              </div>
            ))}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SortingModal;
