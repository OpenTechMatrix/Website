import React from "react";
import BackendImage from "../../../Assets/images/Enrich.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/Beauty_e-commerce.pdf";

const Beauty = ({ currentScollPos, componentHeights }) => {
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
              <span>Beauty E-commerce</span>
              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              A Beauty e-Commerce client aimed to launch an e-Commerce
              platform for booking beauty services and purchasing products.
              Objectives included seamless appointment scheduling, online
              purchases, wallet integration, discounts, and gift vouchers for
              user convenience.
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

export default Beauty;
