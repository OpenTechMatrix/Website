import React from "react";
import WhoWeAreEventsPage2023Img from "../../../../../Assets/images/WhoWeAreEventsPage2023Diwali.jpg";

const WhoWeAreEventPage2023MB = ({
  currentScollPosition,
  componentHeights,
}) => {
  const heigthComponent = componentHeights * 4 - 200;
  return (
    <div
      className={
        currentScollPosition > heigthComponent
          ? "WhoWeAreEvents2020-2020PageBlock TextScrollAnimation1 WhoWeAreEventsPageBlockctn "
          : "WhoWeAreEventsPageBlockctn"
      }
    >
      <div className="WhoWeAreEventsPageBlock">
        <img
          src={WhoWeAreEventsPage2023Img}
          className="WhoWeAreEventsPage2023Image"
          alt=""
        />
        <div className="WhoWeArePageBlockContainer">
          <h2>2023 Diwali Celebrations</h2>
          <p>
            At Tech matrix, Diwali 2023 was celebrated with joy and unity.
            Festivities included vibrant decorations, traditional treats, and
            cultural performances, fostering camaraderie among employees.
            Through rangoli competitions and heartfelt exchanges, we embraced
            light, prosperity, and togetherness, enriching our workplace
            culture. We eagerly anticipate more celebrations promoting harmony.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventPage2023MB;
