import React from "react";

import "./footer.css"
const Footer = () => {
  return (
    <section className="f_sectoin">
      <div className="f_wrap">
        <div className="f_content container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="f_title">
                <h1>Are you ready to manage your online order with us?</h1>
                <p>try it now for a month free of cancellation </p>
                <button className="btn ">View Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
