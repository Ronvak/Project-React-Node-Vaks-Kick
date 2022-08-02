import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function ContactUs() {
  return (
    <Card className="text-center">
      <Card.Header>Contact Us</Card.Header>
      <Card.Body>
        <Card.Title>Contact us - Customer service available </Card.Title>
        <small className="text-muted">
          Vak's kick does everything so that you are satisfied with your
          experience with us. <br></br> We will be happy to be at your service
          for any question or problem <br></br> Please fill in your details and
          we will get back to you as soon as possible.
          <br></br>
          <br></br>
        </small>
        You can contact us via: <br></br>
        <small className="text-muted">
          <SocialIcon network="facebook" /> &nbsp;
          <SocialIcon network="instagram" /> &nbsp;
          <SocialIcon network="whatsapp" />
        </small>
        <br></br>
        <br></br>
        Or fill the detailes below: <br></br> <br></br>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="email" placeholder="name" />
            <Form.Label>Phone number*</Form.Label>
            <Form.Control type="telephone" placeholder="05X-XXXXXXX" />
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message*</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-dark" as={Link} to="/Home">
          Submit
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Card.Footer>
    </Card>
  );
}

export default ContactUs;
