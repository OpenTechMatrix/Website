import React from "react";
import BackendImage from "../../../Assets/images/opengate.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/DataEngineering_&_Analytics.pdf";

const DataEngineering = ({ currentScollPos, componentHeights }) => {
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
              <span>
                Data Engineering & <br />
                Analytics
              </span>
              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              Partnering with a top firm, we optimized their cloud setup,
              managing setup, config, and access. Tailoring solutions for
              diverse needs, we optimized VMs, networks, and storage, ensuring
              efficient resource use and security.
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

export default DataEngineering;
