import React from "react";
import "../assets/style/footer.scss";

function Footer() {
  return (
    <>
      {/* <div className="container my-"> */}
      <div className="footerss">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#111111d8" }}
              >
                shopping online
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    pricing
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    where we deliver?
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#111111d8" }}
              >
                git cards
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery and payment
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    activate the card
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Adarsh
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
