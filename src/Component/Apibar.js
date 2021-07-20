import React from "react";
import { Container, Col } from "reactstrap";
import "./apibar.css";

function APIBar() {
  return (
    <Container fluid className="container-api">
      <div className="container">
        <div className="container-apibar">
          <div className="input-box">
            <form action="">
              <div className="row d-flex align-items-center justify-content-center">
                <Col>
                  <input className="input-bar" type="text" />
                </Col>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button className="input-button ">Shorten it</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default APIBar;
