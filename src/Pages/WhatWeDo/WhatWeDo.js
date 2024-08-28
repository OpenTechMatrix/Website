// WhatWeDo.js
import React, { useRef, useState, useEffect } from "react";
import { getScrollPosition, setScrollPosition } from "./ScrollHeight.js";
import WWDBanner from "./WWDBanner/WWDBanner";
import WWDBackend from "./WWDBackend/WWDBackend";
import WWDFrontend from "./WWDFrontend/WWDFrontend";
import WWDDatabase from "./WWDDatabase/WWDDatabase";
import WWDDevOps from "./WWDDevOps/WWDDevOps";
import WWDCloud from "./WWDCloud/WWDCloud";
import WWDAnalytics from "./WWDAnalytics/WWDAnalytics";
import WWDDesign from "./WWDDesign/WWDDesign";
import WWDFooter from "./WWDFooter/WWDFooter.js";
import WWDHeader from "./WWDHeader/WWDHeader";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const componentRefs = {
    banner: useRef(null),
    backend: useRef(null),
    frontend: useRef(null),
    database: useRef(null),
    devOps: useRef(null),
    cloud: useRef(null),
    analytics: useRef(null),
    design: useRef(null),
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
    }; // eslint-disable-next-line
  }, [scrollSlow]);

  return (
    <section className={`WWDContainer ${scrollSlow ? "scroll-slow" : ""}`}>
      <WWDHeader
        bgColor={
          getScrollPosition() > componentHeights.banner - 100
            ? "transparent"
            : "#080d27"
        }
        displayNone={
          getScrollPosition() > componentHeights.banner * 8 - 200
            ? "none"
            : "block"
        }
      />
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-area" ref={componentRefs.banner}>
          <WWDBanner className="What-we-do-banner" />
        </div>
        <div className="scroll-area" ref={componentRefs.backend}>
          <WWDBackend
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.banner}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.frontend}>
          <WWDFrontend
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.database}>
          <WWDDatabase
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.devOps}>
          <WWDDevOps
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.cloud}>
          <WWDCloud
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.analytics}>
          <WWDAnalytics
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="scroll-area" ref={componentRefs.design}>
          <WWDDesign
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.frontend}
          />
        </div>
        <div className="WWDFooter">
          <WWDFooter
            currentScollPos={getScrollPosition()}
            componentHeights={componentHeights.banner}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
