import React from "react";
import "./highQuality.css";
const HighQuality = () => {
  const qContent = [
    {
      title: "Too many tablets?",
      desc: "Consolidate all your orders in one tablet for a seamless management experience.",
    },
    {
      title: "Use more platforms with ease.",
      desc: "Take advantage of more sales channels without the added effort and admin.",
    },
    {
      title: "Losing money from delayed orders?",
      desc: "Pause your store or add prep time to your delivery estimate with Storefront Pausing or Busy Mode to avoid charges.",
    },
  ];
  return (
    <div className="high_quality_section">
      <div className="high_quality_wrap">
        <div className="high_quality_content container">
          <div className="ht_title">
            <h4 className="gr_txt text-center">High-quality</h4>
            <h1>Say goodbye to tablet hell</h1>
          </div>
          <div className="quality_card">
            <div className="row">
              {qContent.map((el, i) => (
                <div className="col-md-4">
                  <img src={require(`./images/q${i + 1}.png`)} alt="" />
                  <h2> {el.title} </h2>
                  <p>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQuality;
