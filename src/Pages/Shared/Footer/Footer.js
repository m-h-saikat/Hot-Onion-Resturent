import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../Image/logo.png'
import { NavLink } from "react-router-dom";
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
<div className="col-md-4">

</div>
            <div className="col-md-4 d-flex float-right">
             
             <div>
             <NavLink to="#"className="NavLink text-white">About Online Food</NavLink> <br />
             <NavLink to="#"className="NavLink text-white">Read Our Blog</NavLink><br />
             <NavLink to="#"className="NavLink text-white">Sign Up to Deliver</NavLink><br />
             <NavLink to="#"className="NavLink text-white">Add Your Resturent</NavLink>      
             </div>
             <div >
             <NavLink to="#"className="NavLink text-white">Get Help  </NavLink>
             <NavLink to="#"className="NavLink text-white"> Read FAQs </NavLink><br />
             <NavLink to="#"className="NavLink text-white">View all cities</NavLink><br />
             <NavLink to="#"className="NavLink text-white">Resturents Near Me</NavLink><br />
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