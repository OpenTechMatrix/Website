import React, { useRef, useState, useEffect } from "react";
import {
  getScrollPosition,
  setScrollPosition,
} from "../../WhoWeDoScrollHeight";
import "./WhoWeAreEventPageMB.css";
import WhoWeAreEventPage2019MB from "./WhoWeAreEventPage2019MB/WhoWeAreEventPage2019MB";
import WhoWeAreEventPage2020MB from "./WhoWeAreEventPage2020MB/WhoWeAreEventPage2020MB";
import WhoWeAreEventPage2021MB from "./WhoWeAreEventPage2021MB/WhoWeAreEventPage2021MB";
import WhoWeAreEventPage2022MB from "./WhoWeAreEventPage2022MB/WhoWeAreEventsPage2022MB";
import WhoWeAreEventPage2023MB from "./WhoWeAreEventPage2023MB/WhoWeAreEventPage2023MB";

const WhoWeAreEventPageMB = ({ isOpen, closeModal }) => {
  const containerRef = useRef(null);
  const componentRefs = {
    WhoWeAreEventsPage2019: useRef(null),
    WhoWeAreEventsPage2020: useRef(null),
    WhoWeAreEventsPage2021: useRef(null),
    WhoWeAreEventsPage2022: useRef(null),
    WhoWeAreEventsPage2023: useRef(null),
  };

  const [scrollSlow, setScrollSlow] = useState(false);
  const [componentHeights, setComponentHeights] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      setScrollPosition(scrollPosition);

      const scrollThreshold = 200;
      setScrollSlow(scrollPosition > scrollThreshold);
      const heights = {};
      Object.keys(componentRefs).forEach((key) => {
        const component = componentRefs[key].current;
        if (component) {
          heights[key] = component.getBoundingClientRect().height;
        }
      });
      setComponentHeights(heights);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial height calculation on mount
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollSlow]); // eslint-disable-line

  return (
    <>
      {isOpen ? (
        <div
          className={`WhoWeAreEventPage fade-in ${
            scrollSlow ? "scroll-slow" : ""
          }`}
        >
          <h1 className="whoweareHeading">EVENTS</h1>
          <div className="scroll-container" ref={containerRef}>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2019}
            >
              <WhoWeAreEventPage2019MB
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2019}
                closeModal={closeModal}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2020}
            >
              <WhoWeAreEventPage2020MB
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2020}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2021}
            >
              <WhoWeAreEventPage2021MB
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2021}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2022}
            >
              <WhoWeAreEventPage2022MB
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2022}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2023}
            >
              <WhoWeAreEventPage2023MB
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2023}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WhoWeAreEventPageMB;
