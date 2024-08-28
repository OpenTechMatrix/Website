import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import BackendImage from "../../../Assets/images/FrontendImage.png";
import BoxShadow from "../../../Assets/images/frontendImg.png";

const WWDFrontend = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 2 - 300;
  return (
    <div className="WWDDataContent">
      <div className="wrapper">
        <div className="WWDDataSection">
          <div className={currentScollPos>heigthComponent ?"WWDDataSectionLeft TextScrollAnimation" : "WWDDataSectionLeft"} >
            <h3><span>front</span>end</h3>
            <p>              
              <span>Our Frontend team Crafts captivating,</span>
              <span>user-friendly interfaces with cutting-edge </span>
              <span>tech and best practices. Our responsive web</span>
              <span> apps seamlessly merge functionality and design</span>
              <span>ensuring flawless solutions from wireframes</span>
              <span>to deployment.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={BackendImage} alt="Backend" />
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

export default WWDFrontend;
