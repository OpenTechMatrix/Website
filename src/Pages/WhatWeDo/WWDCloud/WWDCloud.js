import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import CloudImage from "../../../Assets/images/CloudImage.png";
import BoxShadow from "../../../Assets/images/cloudimg.png";

const WWDCloud = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 5 - 300;
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
            <h3>cloud</h3>
            <p>              
              <span>Transform your business with our advanced</span>
              <span>Cloud solutions. Effortlessly migrate, manage,</span>
              <span>and scale operations on our secure platform.</span>
              <span> Enjoy unmatched flexibility, efficiency,</span>
              <span>and innovation to drive growth and excel</span>
              <span>in the digital realm.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={CloudImage} alt="Backend" />
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

export default WWDCloud;
