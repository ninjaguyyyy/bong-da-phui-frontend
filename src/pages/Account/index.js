import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

export default function Account() {
  return (
    <div className="account-page">
      <Container>
        <Row className="account-page__contents">
          <Col className="account-page__welcome">
            <img
              src={require("../../assets/images/champions-league.png")}
              alt="logo-champion-league"
              width={100}
            />
            <h6>WELCOME TO</h6>
            <h1>BONG DA PHUI</h1>
            <p>
              The next generation social network & community! Connect with your
              friends and the teams together create a healthy soccer field!
            </p>
            <div className="account-page__buttons">
              <Button
                variant="outline-light"
                size="lg"
                className="login active"
              >
                Login
              </Button>
              <Button variant="outline-light" size="lg" className="register">
                Register
              </Button>
            </div>
          </Col>
          <Col className="account-form">
            {/* <Login /> */}
            <Register />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
