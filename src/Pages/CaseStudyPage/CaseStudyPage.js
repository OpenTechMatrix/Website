import React, { useRef, useState, useEffect } from "react";
import {
  getScrollPosition,
  setScrollPosition,
} from "../WhatWeDo/ScrollHeight.js";
import CaseStudyBanner from "./CaseStudyBanner/CaseStudyBanner.js";
import { useLocation } from 'react-router-dom'; // Import useLocation hook

import TransformingSCR from "./TransformingSCR/TransformingSCR.js";
import ComputerBrand from "./ComputerBrand/ComputerBrand.js";
import Beauty from "./Beauty/Beauty.js";
import TextMartech from "./TextMartech/TextMartech.js";
import DataEngineering from "./DataEngineering/DataEngineering.js";
import InfoBip from "./InfoBip/InfoBip.js";
import CSFOOTER from "./CSFOOTER/CSFOOTER.js";
import CSHEADER from "./CSHEADER/CSHEADER.js";
import "./CaseStudyPage.css";

const CaseStudyPage = () => {
  const containerRef = useRef(null);
  const componentRefs = {
    banner: useRef(null),
    transformingSCR: useRef(null),
    beauty: useRef(null),
    computerBrand: useRef(null),
    textMartech: useRef(null),
    dataEngineering: useRef(null),
    infoBip: useRef(null),
    design: useRef(null),
  };

  const [scrollSlow, setScrollSlow] = useState(false);
  const [componentHeights, setComponentHeights] = useState({});
  const location = useLocation(); // Get current location

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

      // Scroll to the section specified in the URL hash fragment
      const hash = location.hash.substring(1);
      if (hash && componentRefs[hash]) {
        const targetRef = componentRefs[hash];
        container.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    }; // eslint-disable-next-line
  }, [scrollSlow, location]); // Add location to the dependency array

  return (
    <section className={`WWDContainer ${scrollSlow ? "scroll-slow" : ""}`}>
      <CSHEADER
        bgColor={
          getScrollPosition() > componentHeights.banner - 100
            ? "transparent"
            : "#080d27"
        }
        displayNone={
          getScrollPosition() > componentHeights.banner * 7 - 200
            ? "none"
            : "block"
        }
      />
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-area" ref={componentRefs.banner}>
          <CaseStudyBanner className="What-we-do-banner" />
        </div>
        <div className="scroll-area" ref={componentRefs.transformingSCR}>
          <TransformingSCR
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.banner}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.beauty}>
          <Beauty
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.computerBrand}>
          <ComputerBrand
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.textMartech}>
          <TextMartech
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.dataEngineering}>
          <DataEngineering
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.infoBip}>
          <InfoBip
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="WWDFooter">
          <CSFOOTER
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.banner}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
