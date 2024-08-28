import React from "react";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";
import DatabaseImage from "../../../Assets/images/DatabaseImage.png";
import BoxShadow from "../../../Assets/images/databaseimg.png";

const WWDDatabase = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 3 - 300;
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
            <h3>database</h3>
            <p>              
              <span>We provide tailored database solutions,</span>
              <span>optimizing storage, retrieval, security,</span>
              <span>and integration. Trust us for precise</span>
              <span>data management, enhancing operations</span>
              <span>and decision-making. Dependable</span>
              <span>administration for your business needs.</span>
            </p>
            <div className="boxShadow">
              <img src={BoxShadow} alt="Box Shadow" />
            </div>
          </div>
          <div className="WWDDataSectionRight">
            <figure>
              <img src={DatabaseImage} alt="Backend" />
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

export default WWDDatabase;
