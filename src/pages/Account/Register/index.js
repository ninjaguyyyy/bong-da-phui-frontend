import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function Register() {
  return (
    <Card className="wrapper login">
      <Card.Body>
        <img
          src={require("../../../assets/images/rocket.png")}
          alt="rocket"
          className="rocket-image"
        />
        <Card.Title className="title">Create your Account</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Username" />
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-4 mt-4"
              />
              <Form.Control type="password" placeholder="Repeat Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 submit">
              Register Now
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
