import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner_section">
      <div className="banner_sectoin_wrap">
        <div className="banner_sectoin_container container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>
                <span>Grow & Manage</span> your online order with Blend
              </h1>
              <p>
                Blend’s all-in-one solution helps you take control of your
                delivery data across platforms — reducing order issues,
                increasing sales, and decreasing delivery headaches.
              </p>
              <div className="b_search">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <button className="btn">Get Free trail</button>
              </div>
            </div>
          </div>
          <div className="row img_gallery">
            <div className="col-md-4">
              <img src={require("./banner1.png")} alt="" />
            </div>
            <div className="col-md-4">
              <img src={require("./banner2.png")} alt="" />
            </div>
            <div className="col-md-4">
              <img src={require("./banner3.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
