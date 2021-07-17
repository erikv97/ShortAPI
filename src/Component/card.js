import React from "react";
import "./card.css";
import { Container, Col, Row } from "reactstrap";

function Card() {
  return (
    <section className="card-section">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;
