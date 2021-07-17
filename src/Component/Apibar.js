import React from "react";
import { Col } from "reactstrap";
import "./apibar.css";

function APIBar() {
  return (
    <div className="container">
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
  );
}

export default APIBar;
