import React from "react";
import "./advanced-statistics.css";
import { Container, Col, Row } from "reactstrap";
import Card from "./card";

function AdvancedStatistics() {
  return (
    <Container fluid id="weather-app">
      <section className="section-wrapper pb-5 h-100 d-flex align-items-center justify-content-center">
        <Row>
          <dic className="col text-center">
            <h1 className="poppin-extrabold">Advance statistics</h1>
            <p className="open-sans-grey ">
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
            <Col style={{ paddingLeft: "0px" }} md={4}>
              <section className="card-section">
                <div class="card">
                  <div class="circle"></div>
                  <div class="card-body">
                    <h5 class="card-title">Brand </h5>
                    <p class="card-text open-sans-grey">
                      Boost your brand recognition with each click. Generic
                      links don’t mean a thing. Branded links help instil
                      confidence in your content.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
            <Col md={4}>
              <section className="card-section">
                <div class="card">
                  <div class="circle"></div>
                  <div class="card-body">
                    <h5 class="card-title">Detailed Records</h5>
                    <p class="card-text open-sans-grey">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
            <Col style={{ paddingRight: "0px" }} md={4}>
              <section className="card-section">
                <div class="card">
                  <div class="circle"></div>
                  <div class="card-body">
                    <h5 class="card-title">Fully Customizable</h5>
                    <p class="card-text open-sans-grey">
                      Improve brand awareness and content discoverability
                      through customizable links, supercharging audience
                      engagement.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
            <div className="lines"></div>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default AdvancedStatistics;
