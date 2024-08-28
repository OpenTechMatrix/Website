import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import AnalyticsImage from "../../../Assets/images/AnalyticsImage.png";
import BoxShadow from "../../../Assets/images/BoxShadow.png";

const WWDAnalytics = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 6 - 300;
  return (
    <div className="WWDDataContent">
      <div className="wrapper">
        <div className="WWDDataSection">
          <div
            className={
              currentScollPos > heigthComponent
                ? "WWDDataSectionLeft TextScrollAnimation"
                : "WWDDataSectionLeft"
            }
          >
            <h3>analytics</h3>
            <p>              
              <span>Leverage our advanced analytics to drive </span>
              <span>corporate growth and efficiency. Our</span>
              <span>cutting-edge algorithms and intuitive visuals</span>
              <span>uncover hidden trends, streamline processes,</span>
              <span>and keep you competitive. Elevate your</span>
              <span>analytics with us for unparalleled insights.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={AnalyticsImage} alt="Backend" />
            </figure>
          </div>
          <div className="getconsultationIcon">
            <a href={"#getconsulation"} title="Get Consultation">
              <img src={GetCounsulationIcon} alt="Get Consulation Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WWDAnalytics;
