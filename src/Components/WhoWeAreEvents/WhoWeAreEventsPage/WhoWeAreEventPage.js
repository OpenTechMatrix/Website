import React, { useRef, useState, useEffect } from "react";
import { getScrollPosition, setScrollPosition } from "../WhoWeDoScrollHeight";
import "./WhoWeAreEventPage.css";
import WhoWeAreEventsPage2020 from "../WhoWeAreEventsPage2020/WhoWeAreEventsPage2020";
import WhoWeAreEventsPage2021 from "../WhoWeAreEventsPage2021/WhoWeAreEventsPage2021";
import WhoWeAreEventsPage2023 from "../WhoWeAreEventsPage2023/WhoWeAreEventsPage2023";

const WhoWeAreEventPage = ({ isOpen, closeModal }) => {
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
              ref={componentRefs.WhoWeAreEventsPage2020}
            >
              <WhoWeAreEventsPage2020
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2020}
                closeModal={closeModal}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2021}
            >
              <WhoWeAreEventsPage2021
                currentScrollPosition={getScrollPosition()}
                componentHeights={componentHeights.WhoWeAreEventsPage2021}
              />
            </div>
            <div
              className="scroll-area"
              ref={componentRefs.WhoWeAreEventsPage2023}
            >
              <WhoWeAreEventsPage2023
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

export default WhoWeAreEventPage;
