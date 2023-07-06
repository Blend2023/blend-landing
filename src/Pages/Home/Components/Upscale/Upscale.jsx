import React from "react";
import "./ups.css";
const Upscale = () => {
  return (
    <section className="ups_section mb_100">
      <div className="ups_wrap">
        <div className="ups_content container">
          <div className="row aac">
            <div className="col-md-6 left">
              <h2 className="gr_txt">Why should you work with us?</h2>
              <h1>To upscale your business to the next level</h1>
              <p>
                You’ll never have to manually copy an online order to your
                in-house system again. No more tablet hell either, you'll find
                all your online orders to one single device.
              </p>
            </div>
            <div className="col-md-6">
              <div className="right">
                <h5>
                  <img src={require("./ok.png")} alt="" />
                  Real-time integration of all sales channels
                </h5>
                <h5>
                  <img src={require("./ok.png")} alt="" />
                  Accurate transfer of every order
                </h5>
                <h5>
                  <img src={require("./ok.png")} alt="" />
                  All orders managed from a single device
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upscale;
