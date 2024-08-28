import React from "react";
import "./WhoWeAreEventsPage2021.css";
import WhoWeAreEventsPage2021Img from "../../../Assets/images/WhoWeAreEventsPage2022Dusshera.png";
import WhoWeAreEventsPage2022Img from "../../../Assets/images/WhoWeAreEventsPage2023Dusshera.png";

const WhoWeAreEventsPage2021 = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 1 - 200;
  return (
    <div
      className={
        currentScollPos > heigthComponent
          ? "WhoWeAreEvents2019-2020PageBlock TextScrollAnimation1 WhoWeAreEvents2021-2022PageBlock"
          : "WhoWeAreEvents2021-2022PageBlock WhoWeAreEvents2019-2020PageBlock"
      }
    >
      <div className="WhoWeAreEventsPageBlock">
        <figure>
          <img src={WhoWeAreEventsPage2021Img} alt="" className="WhoWeAreEventsPage2021Img"/>
        </figure>
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
      <div className="WhoWeAreEventsPageBlock">
        <figure>
          <img src={WhoWeAreEventsPage2022Img} alt="" className="WhoWeAreEventsPage2022Img" />
        </figure>
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

export default WhoWeAreEventsPage2021;
