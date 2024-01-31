import React from "react";
import "../assets/style/loging.scss";
import loginglogo from "../assets/images/logo.png";

function Loging() {
  return (
    <>
      <div className="login-main-page">
        <div className="login-conatner">
          <div className="login-logo">
            <img src={loginglogo} alt="" />
          </div>
          <div className="login-form">
            <div className="login-input-form">
              <h4>Sign in</h4>
              <div>
                <input
                  type="text"
                  name="member"
                  className="login-input-box"
                  placeholder="MemberID"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="number"
                  className="login-input-box"
                  placeholder="N"
                />
              </div>

              <div className="forget-password-list">
                <a href="">Reminder Me</a>
                <a href="#">Forget Password</a>
              </div>
              <button className="sign-button">SIGN IN</button>
              <div className="other-loging-method">
                <p>Or</p>
                <div className="login-with-googles">
                  <a href="#">Google</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loging;
