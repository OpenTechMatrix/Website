import React from "react";
import WhoWeAreEventsPage2021Img from "../../../../../Assets/images/WhoWeAreEventsPage2022Dusshera.png";

const WhoWeAreEventPage2021MB = ({
  currentScollPosition,
  componentHeights,
}) => {
  const heigthComponent = componentHeights * 2 - 200;
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
          src={WhoWeAreEventsPage2021Img}
          className="WhoWeAreEventsPage2021Image"
          alt=""
        />
        <div className="WhoWeArePageBlockContainer">
          <h2>2022 Dusshera Celebrations</h2>
          <p>
            Join us in commemorating the spirit of Dusshera 2022! Our team
            united to honor good over evil, fostering positivity and unity.
            Through vibrant festivities, we embraced courage and perseverance,
            embodying our company's resilience. Warmest wishes for a prosperous
            Dusshera from our dedicated employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventPage2021MB;
