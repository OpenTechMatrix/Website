import React from "react";
import BackendImage from "../../../Assets/images/Lenovo.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/Partneringwitha_TopComputerBrand.pdf";

const ComputerBrand = ({ currentScollPos, componentHeights }) => {
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
                Partnering with a <br />
                top Computer Brand
              </span>
              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              Tech matrix partnered with a leading tech firm on two key
              projects: the Licensing Admin Portal, simplifying licensing
              processes, and LanSchool Air, a cloud-based classroom management
              tool enhancing teaching capabilities for educators.
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

export default ComputerBrand;
