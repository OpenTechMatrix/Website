import React from "react";
import BackendImage from "../../../Assets/images/Wunderkind.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/InfoBip_Migration.pdf";

const InfoBip = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights - 300;
  return (
    <div className="CSContainer">
      <div className="wrapper">
        <div className="CSSection">
          <div className="CSSectionLeft">
            <figure>
              <img src={BackendImage} alt="Backend" />
            </figure>
          </div>
          <div
            className={
              currentScollPos > heigthComponent
                ? "CSSectionRight TextScrollAnimation"
                : "CSSectionRight"
            }
          >
            <h3 className="Card_Headline">
              <span>InfoBip Migration</span>
              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              Client migrated from Open Market to InfoBip for enhanced
              performance and broader channel options. Objective: ensure stable,
              high-performing messaging services with InfoBip's advanced
              features amid Open Market's deprecation.
            </p>
            <a href={samplePDF1} target="_blank" rel="noreferrer">
              <button className="ViewPDF_Button">View PDF</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBip;
