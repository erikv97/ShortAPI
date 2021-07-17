import React from "react";
import "./boost-today.css";
import { Container, Col, Row } from "reactstrap";

function BoostToday() {
  return (
    <section className="boost-section">
      <Container>
        <div className="wrapper">
          <h3>Boost our links today</h3>
          <button className="get-started">Get Started</button>
        </div>
      </Container>
    </section>
  );
}

export default BoostToday;