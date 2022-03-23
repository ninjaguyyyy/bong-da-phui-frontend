import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Card, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Card className="wrapper login">
      <Card.Body>
        <img
          src={require("../../../assets/images/rocket.png")}
          alt="rocket"
          className="rocket-image"
        />
        <Card.Title className="title">Account Login</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              className="mb-4"
              id="username"
            />
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 submit">
            Login to your Account
          </Button>
        </Form>
        <p>Login with your Social Account</p>
        <div className="social-buttons">
          <Button variant="primary" className="fb">
            <FaFacebookF />
          </Button>
          <Button variant="danger" className="gg">
            <FaGoogle />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
