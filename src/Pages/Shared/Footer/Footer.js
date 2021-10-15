import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../Image/logo.png'
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-center">
              <img src={Logo} alt="" width="200" height="50" />

              </div>
            </div>

            <div className="col-md-6">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      +88 01961-264444
                    </h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> 230 Dhaka,
                      Bangladesh, 1236,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2">
            <small>
              ©Hot Onion Resturent. All rights reserved,saikat-2022
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;