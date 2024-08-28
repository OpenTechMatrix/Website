import React, { useState, useEffect } from "react";
import "./WhoWeAreEvents.css";
import WhoWeAreEventPage from "./WhoWeAreEventsPage/WhoWeAreEventPage";
import WhoWeAreEventPageMB from "./WhoWeAreEventsPage/WhoWeAreEventPageMB/WhoWeAreEventPageMB"; // Importing the mobile version of the component
import WhoWeAreEventsImg1 from "../../Assets/images/WhoWeAreEvents2022Diwali2.jpg";
import WhoWeAreEventsImg2 from "../../Assets/images/WhoWeAreEvents2022Diwali1.jpg";
import WhoWeAreEventsImg3 from "../../Assets/images/WhoWeAreEvents2021Diwali1.jpg";
import WhoWeAreEventsImg4 from "../../Assets/images/WhoWeAreEvents2023Diwali1.jpg";
import WhoWeAreEventsImg5 from "../../Assets/images/WhoWeAreEvents2023Diwali2.jpg";
import WhoWeAreEventsImg6 from "../../Assets/images/WhoWeAreEvents2023Diwali3.png";
import WhoWeAreEventsBorderLeft from "../../Assets/images/WhoWeAreEventsBorderLeft.png";
import WhoWeAreEventsBorderRight from "../../Assets/images/WhoWeAreEventsBorderRight.png";
let open = true
function WhoWeAreEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const openModal = (e) => {
    setIsModalOpen(open);
  };

  const closeModal = () => {
    console.log("hello")
    setIsModalOpen(false);
  };

  useEffect(()=>{console.log(isModalOpen)},[isModalOpen])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="WhoWeAreEvents">
      {!isModalOpen && (
        <div className="WhoWeAreEventsContainer">
          <div className="WhoWeAreEventsBlock1">
            <figure className="WhoWeAreEventsSection1">
              <img
                src={WhoWeAreEventsImg1}
                alt=""
                className="WhoWeAreEventsImg1"
              />
            </figure>
            <figure className="WhoWeAreEventsBorderLeft">
              <img
                src={WhoWeAreEventsBorderLeft}
                alt=""
                className="WhoWeAreEventsBorderLeftImg"
              />
            </figure>
            <figure className="WhoWeAreEventsSection4">
              <img
                src={WhoWeAreEventsImg3}
                alt=""
                className="WhoWeAreEventsImg3"
              />
            </figure>
          </div>
          <div className="WhoWeAreEventsBlock2">
            <div className="WhoWeAreEventsBlock2Div">
              <div className="WhoWeAreEventsSection2">
                <h1>EVENTS</h1>
                <h2>One Family</h2>
                <button onClick={openModal}>View All</button>
              </div>
              <div className="WhoWeAreEventsSection2Block">
                <figure className="WhoWeAreEventsSection5">
                  <img src={WhoWeAreEventsImg4} alt="" />
                </figure>
                <figure className="WhoWeAreEventsSection6">
                  <img src={WhoWeAreEventsImg5} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="WhoWeAreEventsBlock3">
            <figure className="WhoWeAreEventsSection3">
              <img
                src={WhoWeAreEventsImg2}
                alt=""
                className="WhoWeAreEventsImg2"
              />
            </figure>
            <figure className="WhoWeAreEventsBorderRight">
              <img
                src={WhoWeAreEventsBorderRight}
                alt=""
                className="WhoWeAreEventsBorderRightImg"
              />
            </figure>
            <figure className="WhoWeAreEventsSection7">
              <img
                src={WhoWeAreEventsImg6}
                alt=""
                className="WhoWeAreEventsImg6"
              />
            </figure>
          </div>
        </div>
      )}
      {isModalOpen &&
        (isMobile ? (
          <WhoWeAreEventPageMB
            className="WhoWeAreEventPageMB"
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        ) : (
          <WhoWeAreEventPage
            className="WhoWeAreEventPage"
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        ))}
    </div>
  );
}

export default WhoWeAreEvents;
