import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";
import "./navbar.css";
import logo from "../image/logo.svg";

const NavbarApp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container fluid className="navbar-container">
      <Navbar expand="md">
        <NavbarBrand className="shortly-button" href="/">
          <img src={logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navbar-button">Feature</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-button">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-button">Resources</NavLink>
            </NavItem>
          </Nav>
          <button className="button-login">Login</button>
          <button className="button-sign-up">Sign-Up</button>
        </Collapse>
      </Navbar>
    </Container>
  );
};
export default NavbarApp;
