import React, { useEffect } from "react";
import WhoWeAreEventsPage2019Img from "../../../../../Assets/images/WhoWeAreEventsPage2021Diwali.png";

const WhoWeAreEventPage2019MB = ({ currentScrollPosition, closeModal }) => {
  useEffect(() => {
    // Check if currentScrollPosition is 0 and close modal if true
    if (currentScrollPosition === 1) {
      closeModal();
    }
  }, [currentScrollPosition, closeModal]);

  return (
    <div
      className={
        currentScrollPosition === 0
          ? "WhoWeAreEvents2019-2020PageBlock TextScrollAnimation1 WhoWeAreEventsPageBlockctn "
          : "WhoWeAreEventsPageBlockctn"
      }
    >
      <div className="WhoWeAreEventsPageBlock">
        <img
          src={WhoWeAreEventsPage2019Img}
          className="WhoWeAreEventsPage2019Image"
          alt=""
        />
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
    </div>
  );
};

export default WhoWeAreEventPage2019MB;
