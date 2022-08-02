import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card className="text-center">
      <Card.Header>About Us</Card.Header>
      <Card.Body>
        <Card.Title>Hi There ! </Card.Title>
        <small className="text-muted">
          Vak's kick was founded by Ron Vaknin in 2022 in Dimona, Israel and
          since then we provide shoes all around the world.<br></br>
          We at Vak's kick does nothing else than making sure to get you the
          best shoes with the best prices you will ever see. <br></br>
          We wishing you nice and pleasent experience shopping with us!{" "}
          <br></br>
        </small>
        Contact's options: <br></br>
        <small className="text-muted">
          <SocialIcon network="facebook" /> &nbsp;
          <SocialIcon network="instagram" /> &nbsp;
          <SocialIcon network="whatsapp" />
        </small>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-dark" as={Link} to="/Home">
          Back
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default About;
