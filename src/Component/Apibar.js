import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import "./apibar.css";
// api fetch ================================

function APIBar() {
  const [value, valueVariable] = useState("");
  const [apiList, updateMyArray] = useState([]);
  // const api = "https://api.shrtco.de/v2/shorten?";

  function apiCalls(e) {
    console.log("api call function");

    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        updateMyArray((arr) => [...arr, users]);
      });
  }

  const updateValue = (e) => {
    valueVariable(e.target.value);
  };
  console.log(apiList);

  return (
    <Container fluid className="container-api">
      <div className="container">
        <div className="container-apibar">
          <div className="input-box">
            <form action="">
              <div className="row d-flex align-items-center justify-content-center">
                <Col>
                  <input
                    onChange={updateValue}
                    className="input-bar"
                    type="text"
                  />
                </Col>

                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button className="input-button" onClick={apiCalls}>
                    Shorten it
                  </button>
                </div>
              </div>
              <Row>
                {apiList.map((e) => (
                  <Col className="apiRow" xs={12}>
                    {e.result.short_link} <p>{e.result.original_link}</p>
                  </Col>
                ))}
              </Row>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default APIBar;
