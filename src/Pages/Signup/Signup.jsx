import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <section>
        <div className="login_page">
          <div className="login_wrap">
            <div className="login_content">
              <div className="form_side">
                <h1 className="w-100 mb-5 logo">
                  <Link to="/">blend</Link>
                </h1>
                <div className="form_side_content">
                  <div className="text-center form_title">
                    <h3>Sign Up</h3>
                    <p>Enter your personal details below:</p>
                  </div>
                  <div className="form_inputs">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                    />
                    <input
                      type="text"
                      placeholder="@username"
                      className="form-control"
                    />
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="form-control"
                    />
                    <input
                      type="Password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="text-left ">
                    <p>
                      <input className="agree_check" type="checkbox" />
                      <b>I agree to the</b> <a href="/">Terms of Service </a> &
                      <a href="/">Privacy Policy </a>
                    </p>
                  </div>
                  <div className="back_submit">
                    <button className="btn back_btn">Back</button>
                    <button className="btn submit_btn"> Submit</button>
                  </div>
                  <div className="ask_account">
                    <Link to="/login">
                      Already a Team Member? <span>Login</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="signup_image_side"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
