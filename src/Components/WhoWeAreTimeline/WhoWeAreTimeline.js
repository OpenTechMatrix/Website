import React, { useState, useEffect } from "react";
import "./WhoWeAreTimeline.css";
import debounce from "lodash.debounce";

const years = [2019, 2020, 2021, 2022, 2023];
const paragraphs = [
  'Offshore tech team setup in Mumbai, India to support US based clientele. A new "Technology Consulting" vertical established in the existing business - matrix Instrumentation & Controls (www.matrixcontrol.com)',
  'Remote working becomes the new normal. Another vertical - "Pharma Analytics" established majorly serving domestic pharma companies.',
  "TECH matrix established as a subsidiary company of matrix I & C, adding global clients in the Tech Consulting domain and providing domestic pharmaceutical companies with Analytics solutions.",
  "We established an office in Hisar, Haryana, began design services, and grew to a workforce of 25+. ",
  "We grew to 50+ and established a second office in Mumbai.  ",
];

function WhoWeAreTimeline() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [selectedParagraph, setSelectedParagraph] = useState(paragraphs[0]);

  const handleContainerMouseEnter = () => {
    setIsMouseInside(true);
    document.body.style.overflow = "visible";
  };

  const handleContainerMouseLeave = () => {
    setIsMouseInside(false);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const loadImages = async () => {
      const imageImports = await Promise.all(
        years.map(
          async (year) =>
            (
              await import(`../../Assets/images/Rectangle ${year}.jpg`)
            ).default
        )
      );
      setImages(imageImports);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const handleScroll = debounce(
      (e) => {
        if (!isMouseInside) return;

        const direction =
          Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

        if (direction > 0 && selectedSlide < years.length - 1) {
          setSelectedSlide((prevSlide) => prevSlide + 1);
          setSelectedParagraph(paragraphs[selectedSlide + 1]);
        } else if (direction < 0 && selectedSlide > 0) {
          setSelectedSlide((prevSlide) => prevSlide - 1);
          setSelectedParagraph(paragraphs[selectedSlide - 1]);
        } else if (direction > 0 && selectedSlide === years.length - 1) {
          window.scrollTo({ top: window.scrollY + 100, behavior: "smooth" });
        } else if (direction < 0 && selectedSlide === 0) {
          window.scrollTo({ top: window.scrollY - 100, behavior: "smooth" });
        }
      },
      120,
      true
    );

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [selectedSlide, isMouseInside]);

  useEffect(() => {
    const handleBodyScroll = (e) => {
      if (isMouseInside) {
        e.preventDefault();
      }
    };

    document.body.addEventListener("wheel", handleBodyScroll, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("wheel", handleBodyScroll);
    };
  }, [isMouseInside]);

  const handleButtonClick = (index) => {
    setSelectedSlide(index);
    setSelectedParagraph(paragraphs[index]);
  };

  return (
    <div className="Timeline">
      <div className="Timeline-bg">
        <p>{selectedParagraph}</p>
      </div>

      <ul
        className="imgctn"
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`WWRImage ${index + 1}`}
            className={`${
              index === selectedSlide
                ? "initial"
                : index < selectedSlide
                ? "negative"
                : "rotate"
            }`}
            style={{
              transform: `translate3d(0, ${100 * (index - selectedSlide)}%, 0)`,
            }}
          />
        ))}
      </ul>

      <ul className="btnctn">
        {years.map((year, index) => (
          <li key={index}>
            <button
              className={`dots__dot ${
                index === selectedSlide ? "active" : ""
              } ${index < selectedSlide ? "previous" : ""}`}
              onClick={() => handleButtonClick(index)}
            ></button>
            <span>{year}</span>
          </li>
        ))}
        <div
          className="progress-line"
          style={{
            width: `${
              selectedSlide === 0
                ? 0
                : (selectedSlide / (years.length - 1)) * 80
            }%`,
          }}
        ></div>
      </ul>
    </div>
  );
}

export default WhoWeAreTimeline;
