import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { img, brand, model, price, id } = props.shoe;
  const { onAdd } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" height="250" alt="" />
        <div className="card-body">
          <h5 className="card-title">{brand}</h5>
          <p className="card-text">Model : {model} </p>
          <p className="card-text">
            <small className="text-muted">Price :{price} $ </small> <br></br>
            <Button variant="outline-info" as={Link} to={`/${id}`}>
              More information
            </Button>
            &emsp;&emsp;&emsp;
            <button
              onClick={() => onAdd(props.shoe)}
              type="button"
              className="btn btn-outline-dark"
            >
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Product;
