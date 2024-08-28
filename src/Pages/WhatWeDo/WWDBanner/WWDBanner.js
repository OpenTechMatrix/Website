import React from "react";
import call from "../../../Assets/images/wannatalkcall.png";
import BannerImage from "../../../Assets/images/WhatWeDoBanner.png";
import "./WWDBanner.css";

const WWDBanner = () => {
  return (
    <div className="What-we-do-banner">
      <div className="wrapper">
        <figure className="bannerImage">
          <img src={BannerImage} alt="Banner" />
          <h2>
            <span>We love</span>
            <span>What we do</span>
          </h2>
        </figure>

        <div className="getconsultation">
          <a href={"#getconsulation"} title="Get Consultation">
            <figure>
              <img src={call} alt="Get Consultation" />
            </figure>
            <span>talk to us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WWDBanner;
