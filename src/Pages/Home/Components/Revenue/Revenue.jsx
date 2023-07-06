import React from "react";

import "./revenue.css";

const Revenue = () => {
  return (
    <section className="revenue_section">
      <div className="revenue_wrap">
        <div className="revenue_content container">
          <div className="row aac">
            <div className="col-md-6">
              <div className="r_left">
                <h1>Increase your revenue</h1>
                <p>
                  Armed with in-depth analytical tools and a clear performance
                  overview, you can highlight opportunities for revenue growth
                  and take your business to the next level.
                </p>
                <button className="btn">Get Free trial</button>
              </div>
            </div>
            <div className="col-md-6 text-right">
                <img src={require("./rimg.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
