import { Popover } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar, OverlayTrigger } from "react-bootstrap";
import { IoChatboxEllipses, IoNotificationsSharp } from "react-icons/io5";

export default function Header() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid className="ml-5 mr-5">
        <Navbar.Brand href="#home">bong da phui</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">
            <IoChatboxEllipses />
          </Nav.Link>
          <Nav.Link href="#pricing">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <IoNotificationsSharp />
            </OverlayTrigger>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
