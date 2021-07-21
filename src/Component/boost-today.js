import React from "react";
import "./boost-today.css";
import { Container } from "reactstrap";

function BoostToday() {
  return (
    <section className="boost-section">
      <Container>
        <div className="wrapper">
          <h3>Boost our links today</h3>
          <button className="button-round">Get Started</button>
        </div>
      </Container>
    </section>
  );
}

export default BoostToday;
