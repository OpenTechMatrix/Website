import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import DesignImage from "../../../Assets/images/DesignImage.png";
import BoxShadow from "../../../Assets/images/designimg.png";

const WWDDesign = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 7 - 300;
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
            <h3>design</h3>
            <p>              
              <span>Our design team creates immersive experiences</span>
              <span>blending visual appeal with functionality. Through</span>
              <span>collaborative brainstorming and innovative</span>
              <span>methods, we elevate brands and products,</span>
              <span>creating profound user impact with elegant</span>
              <span>interfaces and visual identities.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={DesignImage} alt="Backend" />
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

export default WWDDesign;
