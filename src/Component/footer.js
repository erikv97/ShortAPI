import React from "react";
import "./footer.css";
import { Container, Col, Row } from "reactstrap";
import Logo from "../image/logo.svg";

function FooterPage() {
  return (
    <section className="footer-section">
      <Container fluid>
        <Row className="h-100">
          <Col className="borders" md={4}>
            <img src={Logo} alt="" />
          </Col>
          <Col className="borders">
            <h6>Features</h6>
            <p>Link shortening</p>
            <p>Branded Link</p>
            <p>Branded Link</p>
          </Col>
          <Col className="borders">
            <h6>Features</h6>
            <p>Link shortening</p>
            <p>Branded Link</p>
            <p>Branded Link</p>
          </Col>
          <Col className="borders">
            <h6>Features</h6>
            <p>Link shortening</p>
            <p>Branded Link</p>
            <p>Branded Link</p>
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
