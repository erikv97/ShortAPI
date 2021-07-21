import React from "react";
import "./Jumbotron.css";
import illustrationworking from "../image/illustration-working.svg";

function Jumbotron() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xs-12 jumbotron-text-wrapper">
              <h1 className="jumbotron-text poppin-extrabold ">
                More than just
                <br /> short link
              </h1>
              <p className="lead open-sans-grey ">
                Build your own brand's recognition and get detailed insights on
                how your links are performing.
              </p>
              <button className="button-round jumbotron-button">
                Get Started
              </button>
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
