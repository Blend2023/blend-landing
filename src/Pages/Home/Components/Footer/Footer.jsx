import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

import "./footer.css";
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
        <div className="f_menus">
          <div className="f_menu_wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div className="fm_title">
                    <h3>Company</h3>
                  </div>
                  <ul>
                    <li>About Us</li>
                    <li>Why Choose us</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="fm_title">
                    <h3>Resources</h3>
                  </div>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Condition</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="fm_title">
                    <h3>Product</h3>
                  </div>
                  <ul>
                    <li>Online Order Managment </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="fm_title">
                    <h3>blend</h3>
                  </div>
                  <div className="sub">
                    <h3>Subscribe to our Newsletter</h3>
                    <div class="b_search">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        class="form-control"
                      />
                      <button class="btn">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f_social">
            <div className="fc_box container">
              <p>
                <span className="cp">© Copyright blend 2020</span>
                <span className="cp" > <BsFacebook/></span>
                <span className="cp" > <BsTwitter/></span>
                <span className="cp" > <BsInstagram/></span>
                <span className="cp" > <BsLinkedin/></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
