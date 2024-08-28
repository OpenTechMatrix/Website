// Casestudy.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import android from "../../Assets/images/WeShape.png";
import mercedes from "../../Assets/images/CasestudyHomepage2.png";
import coke from "../../Assets/images/CasestudyEnrich.png";
import app from "../../Assets/images/CasestudyInfoBlip.png";
import "./Casestudy.css";
import OurApproach from "../OurApproach/OurApproach";

const caseStudiesData = [
  {
    image: android,
    title: "Empowering Companies and Employees for Sustainable Impact",
    description:
      "In an era where corporate social responsibility (CSR) is increasingly becoming integral to business operations, our client from Berlin embarked on a mission to revolutionize CSR engagement. Through cutting-edge technology and strategic innovation, we together crafted a dynamic CSR-Engagement platform aimed at empowering companies and employees to actively contribute to social causes while driving profitability.",
    url: "/case-study#transformingSCR",
  },
  {
    image: mercedes,
    title: "Revolutionizing Customer Engagement with SMS Marketing",
    description:
      "In today's market, businesses aim to deliver value while promoting offerings effectively. Personalized marketing is crucial in the fast-evolving digital landscape. Text message marketing emerges as a potent tool for customer engagement, with Tech matrix's dynamic SMS platform incentivizing users with personalized content.",
    url: "/case-study#beauty",
  },
  {
    image: coke,
    title: "Elevating Beauty Brand's Digital Presence",
    description:
      "Our Beauty eCommerce client wanted to develop an eCommerce platform offering a wide array of beauty services such as hair care, skincare, and manicures, both through their website and mobile application. It’s objective was for it’s clients/users to have the convenience of booking appointments and purchasing beauty products online, while also benefiting from features like wallet integration, discount coupons, and gift vouchers.",
    url: "/case-study#computerBrand",
  },
  {
    image: app,
    title: "InfoBip Migration",
    description:
      "Our client faced the impending deprecation of Open Market services, necessitating a migration to InfoBip for improved performance and expanded channel opportunities. The goal was to ensure stable and high-performing messaging services for clients while leveraging InfoBip's advanced features.",
    url: "/case-study#infoBip",
  },
];

function Casestudy() {
  const firstDivRef = useRef();
  const secondDivRef = useRef();

  const handleScrollFirst = () => {
    if (secondDivRef.current) {
      secondDivRef.current.scrollTop = firstDivRef.current.scrollTop;
    }
  };

  const handleScrollSecond = () => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollTop = secondDivRef.current.scrollTop;
    }
  };

  return (
    <div className="ourApproach-CaseStudyOuterCtn">
      <div className="wrapper ourApproach-CaseStudyInnerCtn">
        <OurApproach />
        <div className="wrapper caseStudiesCtn">
          <h1>CASE STUDIES & STORIES</h1>
          <div className="caseStudiesBg">
            <div></div>
          </div>
          <div className="caseStudiesImgBg"></div>
          <div className="caseStudiesMain">
            <figure
              onScroll={handleScrollFirst}
              ref={firstDivRef}
              className="caseStudiesImgCtn"
            >
              {caseStudiesData.map((caseStudy, index) => (
                <img key={index} src={caseStudy.image} alt="" />
              ))}
            </figure>

            <h3 className="mob-heading">CASE STUDIES & STORIES</h3>
            <div
              onScroll={handleScrollSecond}
              ref={secondDivRef}
              className="caseStidiesDescription"
            >
              {caseStudiesData.map((caseStudy, index) => (
                <div
                  key={index}
                  className="home_dive-in_content caseStudyContainerBlock martop"
                >
                  <h2 className="heading-style-h2 text-color-white">
                    {caseStudy.title}
                  </h2>
                  <p>{caseStudy.description}</p>
                  <Link to={caseStudy.url}><button className="zoom">View Project</button></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
