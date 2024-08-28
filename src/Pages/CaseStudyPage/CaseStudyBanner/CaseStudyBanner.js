import React from "react";
import CSImage from "../../../Assets/images/CS_Banner.png";
import "./CaseStudyBanner.css";

const WWDBanner = () => {
  return (
    <div className="case-study-banner">
      <div className="wrapper">
        <figure className="bannerImage">
          <img src={CSImage} alt="Banner" />
          <h2>
            <span>Lets Hear</span>
            <span>Our Success</span>
          </h2>
        </figure>
      </div>
    </div>
  );
};

export default WWDBanner;
