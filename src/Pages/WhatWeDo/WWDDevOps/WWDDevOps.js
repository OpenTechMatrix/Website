import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import DevopsImage from "../../../Assets/images/DevopsImage.png";
import BoxShadow from "../../../Assets/images/devimg.png";

const WWDDevOps = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 4 - 300;
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
            <h3>devops</h3>
            <p>              
              <span>Tech matrix's DevOps integrates IT operations</span>
              <span>with software development, prioritizing teamwork,</span>
              <span>automation, and continuous improvement. It </span>
              <span>accelerates deployment, improves quality,</span>
              <span>and fosters an innovative development culture.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={DevopsImage} alt="Backend" />
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

export default WWDDevOps;
