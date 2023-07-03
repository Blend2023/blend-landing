import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <section>
        <div className="login_page">
          <div className="login_wrap">
            <div className="login_content">
              <div className="form_side">
              <h1 className="w-100 logo mb-5">
                <Link to="/">blend</Link>
              </h1>
                <div className="form_side_content">
                  <div className="text-center form_title">
                    <h3>Login</h3>
                    <p>Don’t have an Account?</p>
                  </div>
                  <div className="form_inputs">
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
                  <div className="text-right">
                    <a href="/forget">Forget Password ? </a>
                  </div>
                  <div className="back_submit">
                    <button className="btn back_btn">Back</button>
                    <button className="btn submit_btn"> Submit</button>
                  </div>
                  <div className="ask_account">
                    <Link to="/signup">
                      Don’t have an Account? <span> Sign Up</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image_side"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
