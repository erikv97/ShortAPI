import React from "react";
import "./advanced-statistics.css";
import { Container, Col, Row } from "reactstrap";
import Card from "./card";

function AdvancedStatistics() {
  return (
    <div className="container">
      <section className="section-wrapper h-100 d-flex align-items-center justify-content-center">
        <Row>
          <dic className="col text-center">
            <h4>Advance statistics</h4>
            <p>
              Track how your links are performing across the web with
              <br />
              our advanced statistics dashboard
            </p>
          </dic>
        </Row>
      </section>
      <section className="card-information">
        <Container>
          <Row>
            <Col md={4}>
              <Card />
            </Col>
            <Col md={4}>
              <Card />
            </Col>
            <Col md={4}>
              <Card />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AdvancedStatistics;
