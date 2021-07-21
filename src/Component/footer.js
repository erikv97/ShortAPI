import React from "react";
import "./footer.css";
import { Container, Col, Row } from "reactstrap";
import Logo from "../image/logo.svg";
import LogoWhite from "../image/logo-dark.svg";

function FooterPage() {
  return (
    <section className="footer-section">
      <Container>
        <Row className="h-100">
          <Col className="borders" md={4}>
            <img className="logo" src={LogoWhite} alt="" />
          </Col>
          <Col className="borders">
            <h5>Features</h5>
            <p>Link shortening</p>
            <p>Branded Link</p>
            <p>Analytics</p>
          </Col>
          <Col className="borders">
            <h5>Blog</h5>
            <p>Developers</p>
            <p>Support</p>
          </Col>
          <Col className="borders">
            <h5>About</h5>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </Col>
          <Col className="borders footer-icon" md={3}>
            <i class="fab fa-youtube fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-youtube fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterPage;
