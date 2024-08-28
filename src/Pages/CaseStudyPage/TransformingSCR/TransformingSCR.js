import React from "react";
import BackendImage from "../../../Assets/images/WeShape.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/Transforming_CSR.pdf";

const TransformingSCR = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights - 300;
  return (
    <div className="CSContainer">
      <div className="wrapper">
        <h1 className="Cards_Header">CASE STUDIES</h1>
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
              <span>Transforming CSR</span>

              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              With a tech-driven platform, a Berlin-based client pioneers
              corporate social responsibility, enabling businesses and employees
              to increase revenues and social impact. It transforms
              participation by fusing innovation with accountability for
              long-term business success.
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

export default TransformingSCR;
