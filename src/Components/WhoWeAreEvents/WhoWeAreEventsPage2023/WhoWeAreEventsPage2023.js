import React from "react";
import "./WhoWeAreEventsPage2023.css";
import WhoWeAreEventsPage2023Img from "../../../Assets/images/WhoWeAreEventsPage2023Diwali.jpg";

const WhoWeAreEventsPage2023 = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 2 - 200;
  return (
    <div
      className={
        currentScollPos > heigthComponent
          ? "WhoWeAreEvents2023-2024PageBlock TextScrollAnimation1"
          : "WhoWeAreEvents2023-2024PageBlock"
      }
    >
      <div
        className="WhoWeAreEventsPageBlock
         WhoWeAreEvents2023-2024PageBlock WhoWeAreEventsPageBlock"
      >
        <figure className="WhoWeAreEventsPage2023Img">
          <img src={WhoWeAreEventsPage2023Img} alt="" className="WhoWeAreEventsPage2023Image"/>
        </figure>
        <div className="WhoWeArePageBlockContainer">
          <h2>2023 Diwali Celebrations</h2>
          <p>
            At Tech matrix, Diwali 2023 was celebrated with joy and unity.
            Festivities included vibrant decorations, traditional treats, and
            cultural performances, fostering camaraderie among employees.
            Through rangoli competitions and heartfelt exchanges, we embraced
            light, prosperity, and togetherness, enriching our workplace
            culture. We eagerly anticipate more celebrations promoting harmony
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventsPage2023;
