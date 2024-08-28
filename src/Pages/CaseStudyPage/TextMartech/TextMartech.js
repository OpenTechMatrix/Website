import React from "react";

import BackendImage from "../../../Assets/images/MessageBuy_.png";
import BackendImage1 from "../../../Assets/images/MessageBuy.png";
import samplePDF1 from "../../CaseStudyPage/PdfViewer/PDF/TEXT_Martech.pdf";

const TextMartech = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights - 300;
  return (
    <div className="CSContainer">
      <div className="wrapper">
        <div className="CSSection">
          <div className="CSSectionLeft">
            <figure>
            <tr>
                <td>
                  <img src={BackendImage1} alt="Backend" />
                </td>
                <td>
                  <img src={BackendImage} alt="Backend" />
                </td>
              </tr>
           
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
              <span>Text Martech</span>
              <a href={samplePDF1} target="_blank" rel="noreferrer">
                <button className="ViewPDF_Button">View PDF</button>
              </a>
            </h3>
            <p className="Card_Para">
              We developed a dynamic SMS marketing platform, vital for
              businesses in the competitive market. It delivers personalized
              content, fostering deeper connections, and helps companies stand
              out in the digital landscape.
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

export default TextMartech;
