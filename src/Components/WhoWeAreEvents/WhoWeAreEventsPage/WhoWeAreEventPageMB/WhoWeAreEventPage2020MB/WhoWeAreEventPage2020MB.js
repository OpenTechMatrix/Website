import React from "react";
import WhoWeAreEventsPage2020Img from "../../../../../Assets/images/WhoWeAreEventsPage2022Diwali.jpg";

const WhoWeAreEventPage2020MB = ({
  currentScrollPosition,
  componentHeights,
}) => {
  const heigthComponent = componentHeights * 1 - 200;
  return (
    <div
      className={
        currentScrollPosition > heigthComponent
          ? "WhoWeAreEvents2020-2020PageBlock TextScrollAnimation1 WhoWeAreEventsPageBlockctn "
          : "WhoWeAreEventsPageBlockctn"
      }
    >
      <div className="WhoWeAreEventsPageBlock">
        <img
          src={WhoWeAreEventsPage2020Img}
          className="WhoWeAreEventsPage2020Image"
          alt=""
        />
        <div className="WhoWeArePageBlockContainer">
          <h2>2022 Diwali Celebrations</h2>
          <p>
            We celebrated Diwali with joy and unity, embracing the triumph of
            light over darkness. Our workplace sparkled with lights, treats, and
            vibrant festivities, fostering togetherness among our team. We
            reaffirmed our commitment to inclusivity, happiness, and gratitude,
            looking forward to more celebrations and growth ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventPage2020MB;
