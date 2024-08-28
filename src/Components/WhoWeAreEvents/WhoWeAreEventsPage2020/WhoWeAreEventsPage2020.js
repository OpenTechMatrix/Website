import React from "react";
import "./WhoWeAreEventsPage2020.css";
import WhoWeAreEventsPage2019Img from "../../../Assets/images/WhoWeAreEventsPage2021Diwali.png";
import WhoWeAreEventsPage2020Img from "../../../Assets/images/WhoWeAreEventsPage2022Diwali.jpg";

const WhoWeAreEventsPage2020 = ({ currentScrollPosition, closeModal }) => {
  
  return (
    <div
      className={
        currentScrollPosition === 0
          ? "WhoWeAreEvents2019-2020PageBlock TextScrollAnimation1 WhoWeAreEventsPageBlockctn"
          : "WhoWeAreEventsPageBlockctn"
      }
    >
      <div className="WhoWeAreEventsPageBlock">
        <figure>
          <img
            src={WhoWeAreEventsPage2019Img}
            className="WhoWeAreEventsPage2019Image"
            alt=""
          />
        </figure>
        <div className="WhoWeArePageBlockContainer">
          <h2>2021 Diwali Celebrations</h2>
          <p>
            Tech matrix radiated joy during Diwali, uniting employees in vibrant
            celebrations. Rangoli contests and cultural performances ignited our
            workplace with tradition and camaraderie. Grateful for our team's
            dedication, we lit up the office with laughter and unity,
            envisioning a prosperous future together. Cheers to continued
            success and happiness!
          </p>
        </div>
      </div>
      <div className="WhoWeAreEventsPageBlock">
        <figure className="WhoWeAreEventsPage2020Img">
          <img
            src={WhoWeAreEventsPage2020Img}
            alt=""
            className="WhoWeAreEventsPage2020Image"
          />
        </figure>
        <div className="WhoWeArePageBlockContainer">
          <h2>2022 Diwali Celebrations</h2>
          <p>
            Wecelebrated Diwali with joy and unity, embracing the triumph of
            light over darkness. Our workplace sparkled with lights, treats, and
            vibrant festivities, fostering togetherness among our team. We
            reaffirmed our commitment to inclusivity, happiness, and gratitude,
            looking forward to more celebrations and growth ahead. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventsPage2020;
