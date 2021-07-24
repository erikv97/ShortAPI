import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import "./apibar.css";

// api fetch ================================

function APIBar() {
  const [value, valueVariable] = useState("");
  const [apiList, updateMyArray] = useState([]);
  const [urlCheck, checkUrl] = useState(true);
  // const api = "https://api.shrtco.de/v2/shorten?";

  function apiCalls() {
    console.log("api call function");
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((newLink) => {
        updateMyArray((arr) => [...arr, newLink]);
      })
      .catch(function () {
        return console.log("error");
      });
  }
  const updateValue = (e) => {
    valueVariable(e.target.value);
  };

  //Validate Form

  function validateEmail(z) {
    z.preventDefault();
    let error;
    if (!value) {
      error = "Required";
    } else if (value.includes("www.") == false) {
      checkUrl(false);
      console.log(urlCheck);
    } else if (value.includes("www.") == true) {
      checkUrl(true);
      console.log();
      return apiCalls(urlCheck);
    }
  }

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
                  <div>{urlCheck ? "" : <p>Not a valid url</p>}</div>
                </Col>

                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button className="input-button" onClick={validateEmail}>
                    Shorten it
                  </button>
                </div>
              </div>
              <Row>
                {apiList.map((e) => (
                  <>
                    <Col className="apiRow">
                      {e.result.original_link}
                      <div className="z"> {e.result.short_link}</div>
                      <button className="copy-button">Copy</button>
                    </Col>
                  </>
                ))}
              </Row>
            </form>
          </div>
        </div>
      </div>
      {/* FORMIK TEST */}
    </Container>
  );
}

export default APIBar;
