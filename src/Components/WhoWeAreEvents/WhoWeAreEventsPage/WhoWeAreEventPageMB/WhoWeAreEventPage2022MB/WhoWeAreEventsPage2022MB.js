import React from "react";
import WhoWeAreEventsPage2022Img from "../../../../../Assets/images/WhoWeAreEventsPage2023Dusshera.png";

const WhoWeAreEventPage2022MB = ({
  currentScollPosition,
  componentHeights,
}) => {
  const heigthComponent = componentHeights * 3 - 200;
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
          src={WhoWeAreEventsPage2022Img}
          className="WhoWeAreEventsPage2022Image"
          alt=""
        />
        <div className="WhoWeArePageBlockContainer">
          <h2>2023 Dusshera Celebrations</h2>
          <p>
            Tech matrix's 2023 Dussehra Celebration was a vibrant display of
            tradition and unity, where employees rejoiced in the victory of good
            over evil. Through spirited performances and festivities, we
            strengthened our bond and renewed our commitment to excellence.
            Let's cherish these moments of celebration and collaboration on our
            journey forward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreEventPage2022MB;
