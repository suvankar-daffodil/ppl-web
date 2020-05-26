import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footr">
      <div className="footr_lft">
        <div className="footer_div1">
          Copyright © Pet-Socail 2014 All Rights Reserved
        </div>
        <div className="footer_div2">
          <Link replace to="#">Privacy Policy </Link>
          <Link replace to="#"> Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="footr_rgt">
        <ul>
          <li>
            <Link replace to="#">
              <img src="/images/social_1.png" />
            </Link>
          </li>
          <li>
            <Link replace to="#">
              <img src="/images/social_2.png" />
            </Link>
          </li>
          <li>
            <Link replace to="#">
              <img src="/images/social_3.png" />
            </Link>
          </li>
          <li>
            <Link replace to="#">
              <img src="/images/social_4.png" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
