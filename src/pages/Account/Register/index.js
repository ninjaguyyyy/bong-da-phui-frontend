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
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Username" id="username" />
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-4 mt-4"
              id="password"
            />
            <Form.Control
              type="password"
              placeholder="Repeat Password"
              id="repeat-password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 submit">
            Register Now
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
