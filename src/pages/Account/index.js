import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

export const AccountPageSections = {
  Login: "login",
  Register: "register",
};

export default function Account() {
  const [selectedSection, setSelectedSection] = useState(
    AccountPageSections.Login
  );

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
                className={`login ${
                  selectedSection === AccountPageSections.Login ? "active" : ""
                }`}
                onClick={() => setSelectedSection(AccountPageSections.Login)}
              >
                Login
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className={`register ${
                  selectedSection === AccountPageSections.Register
                    ? "active"
                    : ""
                }`}
                onClick={() => setSelectedSection(AccountPageSections.Register)}
              >
                Register
              </Button>
            </div>
          </Col>
          <Col className="account-form">
            {selectedSection === AccountPageSections.Login && <Login />}
            {selectedSection === AccountPageSections.Register && <Register />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
