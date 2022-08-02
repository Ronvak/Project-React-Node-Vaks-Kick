import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";

const Shoe = (props) => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { onAdd } = props;
  const [shoesDB, setShoesDB] = useState([]);
  const [count, increase] = useState(0);

  useEffect(() => {
    if (count <= 1) {
      fetch("/products")
        .then((res) => res.json())
        .then((shoesResponse) => {
          increase(count + 1);
          setShoesDB(shoesResponse);
          const newProduct = shoesDB.find((shoe) => shoe.id === parseInt(id));
          setProduct(newProduct);
        })
        .catch((err) => console.log(err));
    }
  }, [count, id, shoesDB]);

  return (
    <div className="col">
      <Card className="text-center">
        <Card.Header>{product && product.brand}</Card.Header>
        <Card.Body>
          <Card.Title>{product && product.model}</Card.Title>

          <Figure>
            <Figure.Image width={250} src={product && product.img} />
          </Figure>
          <br></br>
          <Card.Text>{product && product.about}</Card.Text>
          <Button variant="outline-dark" onClick={() => onAdd(product)}>
            Add to cart
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="outline-dark" as={Link} to="/Home">
            Go Back
          </Button>
        </Card.Footer>
      </Card>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default Shoe;
