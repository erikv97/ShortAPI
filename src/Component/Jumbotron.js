import React from "react";
import "./Jumbotron.css";
import { Container, Row, Col } from "reactstrap";
import illustrationworking from "../image/illustration-working.svg";

function Jumbotron() {
  return (
    <div className="container">
      <div class="jumbotron">
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-5 col-xs-12 jumbotron-text-wrapper">
              <h1 class="jumbotron-text">
                More than just
                <br /> short link
              </h1>
              <p class="lead">
                Build your own brand's recognition and get detailed insights on
                how your links are performing.
              </p>
              <button className="get-started-button">Get Started</button>
            </div>
            <div className="jumbotron-image col col-xs-12">
              <img className="img-fluid" src={illustrationworking} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
