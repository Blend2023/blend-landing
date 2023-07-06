import React from "react";
import "./discoverMore.css";
const DiscoverMore = () => {
  return (
    <section className="ups_section d_m mt_100 mb_100">
      <div className="ups_wrap">
        <div className="ups_content container">
          <div className="row aac">
            <div className="col-md-6 left">
              <h2 className="gr_txt">Discover More</h2>
              <h1>Analyze your sales & manage your data</h1>
              <p>
                Consolidates all your sales information into one clear overview
                and generates regular sales reports, saving you the hassle of
                copy-pasting sales data from various delivery platforms.
              </p>
            </div>
            <div className="col-md-6">
              <div className="right">
                <div className="ana_item">
                  <img src={require("./a1.png")} alt="" />
                  <div className="ana_content">
                    <h4>No more manual data gathering.</h4>
                    <p>
                      You no longer have to copy data from multiple sources to
                      get a good overview.
                    </p>
                  </div>
                </div>
                <div className="ana_item">
                  <img src={require("./a2.png")} alt="" />
                  <div className="ana_content">
                    <h4>Easy and precise comparisons</h4>
                    <p>
                      Easily compare performance across sales channels,
                      locations and brands.
                    </p>
                  </div>
                </div>
                <div className="ana_item">
                  <img src={require("./a3.png")} alt="" />
                  <div className="ana_content">
                    <h4>Managed from a single screen.</h4>
                    <p>
                      All your reporting data and tool are centralized to your
                      point-of-sale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
