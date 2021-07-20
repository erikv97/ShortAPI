import React from "react";
import "./card.css";
import { Container, Col, Row } from "reactstrap";

function Card() {
  return (
    <section className="card-section">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Brand Recognition</h5>
          <p class="card-text open-sans-grey">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
