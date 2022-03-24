import React from 'react';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { IoChatboxEllipses, IoNotificationsSharp } from 'react-icons/io5';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <Navbar variant="dark" className="header">
      <Container fluid className="ml-5 mr-5 wrapper">
        <Link to="/" className="brand">
          <img src={require('../../../../assets/images/soccer-ball-variant.png')} alt="logo" />
          <span>BONG DA PHUI</span>
        </Link>
        <div className="search">
          <div className="input-group">
            <FormControl type="text" placeholder="Search here for people or team" />
          </div>
        </div>
        <div className="icons">
          <Nav className="util-icons">
            <Nav.Link href="#features">
              <IoChatboxEllipses size={22} />
            </Nav.Link>
            <Nav.Link href="">
              <IoNotificationsSharp size={22} />
            </Nav.Link>
          </Nav>
          <div className="setting-icon">
            <BsGearFill size={22} />
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
