import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
function SortsFilters(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sortType, setSortType] = useState("0");
  const [brandSelect, setBrandSelect] = useState("");
  const [gender, setGender] = useState("All");
  const { handleBrandChange, handleSorting, handleGender, handleClear } = props;

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsFilter /> Sorts & Filters
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <BsFilter /> Sorts & Filter
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <strong>Show only: </strong>
          <div className="row">
            <div className="col-5">
              Brands:
              <Form.Select
                defaultValue={brandSelect}
                onChange={(e) => {
                  setBrandSelect(e.target.value);
                  handleBrandChange(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option value="">All brands</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Reebok">Reebok</option>
                <option value="Puma">Puma</option>
              </Form.Select>
            </div>
            <div className="col-5">
              Gender:
              <Form.Select
                defaultValue={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  handleGender(e.target.value);
                }}
                aria-label="Male"
              >
                <option value="All">All genders</option>
                <option value="Male">Man</option>
                <option value="Female">Women</option>
              </Form.Select>
            </div>
          </div>
          Sorts by: <br></br>
          <Form.Select
            defaultValue={sortType}
            onChange={(e) => {
              setSortType(e.target.value);
              handleSorting(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option value="0">Sorts by :</option>
            <option value="1">High to Low prices</option>
            <option value="2">Low to High prices</option>
          </Form.Select>
          <br></br>
          <br></br>
          <center>
            <Button
              onClick={() => {
                handleClear();
                setBrandSelect("");
                setSortType("0");
                setGender("All");
                handleClose();
              }}
              variant="outline-dark"
            >
              Clear Sorts & Filters
            </Button>
          </center>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default SortsFilters;
