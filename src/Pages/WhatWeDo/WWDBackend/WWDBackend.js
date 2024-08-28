import React from "react";
import BackendImage from "../../../Assets/images/BackendImage.png";
import BoxShadow from "../../../Assets/images/backendimg.png";
import GetCounsulationIcon from "../../../Assets/images/consultButton.png";

const WWDBackend = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights - 300;
  return (
    <div className="WWDDataContent">
      <div className="wrapper">
        <div className="WWDDataSection">
          <div className={currentScollPos>heigthComponent ?"WWDDataSectionLeft TextScrollAnimation" : "WWDDataSectionLeft"} >
            <h3><span>back</span>end</h3>
            <p>      
              <span>Our backend ensures efficient data management,</span>
              <span>scalability and security for seamless application</span>
              <span>functionality. With stable frameworks, we prioritize </span>
              <span>efficiency, enabling dependable communication </span>
              <span>and smooth user experiences.</span>
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

export default WWDBackend;
