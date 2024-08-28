import React, { useState, useEffect } from "react";
import { data1, data2 } from "./TechStackData";
import PlusLogo from "../../Assets/images/plusicon .png";
import MinusLogo from "../../Assets/images/minusicon .png";
import Dropdownarrow from "../../Assets/images/Dropdownarrow.png";
import "./TechStack.css";
import upperarrow from "../../Assets/images/upperarrow.png";

const TechStack = () => {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSecondListVisible, setSecondListVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggle1 = (i) => setSelected1(selected1 === i ? null : i);
  const toggle2 = (i) => setSelected2(selected2 === i ? null : i);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Set isMobileView based on screen width
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const toggleSecondList = () => {
    setSecondListVisible(!isSecondListVisible); // Toggle visibility of the second ul
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <section className="techstack">
      <div className="techstack-heading">
        <div className="wrapper">
          <h3>tech stack</h3>
          <p>What you do matters. Let's secure the future.</p>
        </div>
        <div className="animation-part">
          <ul>
            {Array(1000)
              .fill("<li></li>")
              .map((x, index) => (
                <li key={index}></li>
              ))}
          </ul>
        </div>
      </div>
      <div className="techstack-details">
        <div className="wrapper">
          <ul style={{ padding: "0px" }}>
            {data1.map((item, i) => (
              <li key={i}>
                <div
                  className="tech_stack_content"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    border:
                      selected1 === i
                        ? `5px solid #162D6C`
                        : "5px solid transparent",
                    background:
                      selected1 === i
                        ? `linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.65)), url(${item.background}) no-repeat center center/102% 100%`
                        : "none",
                  }}
                >
                  <div>
                    <div>
                      <span
                        style={{
                          background: selected1 === i ? `none` : "",
                          border:
                            selected1 === i ? `1px solid transparent` : "",
                        }}
                      >
                        <img
                          src={item.logo}
                          alt={item.techstackName}
                          onClick={() => toggle1(i)}
                        />
                      </span>
                      <span onClick={() => toggle1(i)}>
                        {item.techstackName}
                      </span>
                    </div>
                    <span onClick={() => toggle1(i)}>
                      {selected1 === i ? (
                        <img src={MinusLogo} alt="Minus" />
                      ) : (
                        <img src={PlusLogo} alt="Plus" />
                      )}
                    </span>
                  </div>
                  <p
                    className={
                      selected1 === i
                        ? "tech_content show"
                        : "tech_content hide"
                    }
                  >
                    {item.techStackContent}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="second-data">
            {data2.map((item, i) => (
              <li key={i}>
                <div
                  className="tech_stack_content"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    border:
                      selected2 === i
                        ? `5px solid #162D6C`
                        : "5px solid transparent",
                    background:
                      selected2 === i
                        ? `linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.65)), url(${item.background}) no-repeat center center/102% 100%`
                        : "none",
                  }}
                >
                  <div>
                    <div>
                      <span
                        style={{
                          background: selected2 === i ? `none` : "",
                          border:
                            selected2 === i ? `1px solid transparent` : "",
                        }}
                      >
                        <img
                          src={item.logo}
                          alt={item.techstackName}
                          onClick={() => toggle2(i)}
                        />
                      </span>
                      <span onClick={() => toggle2(i)}>
                        {item.techstackName}
                      </span>
                    </div>
                    <span onClick={() => toggle2(i)}>
                      {selected2 === i ? (
                        <img src={MinusLogo} alt="Minus" />
                      ) : (
                        <img src={PlusLogo} alt="Plus" />
                      )}
                    </span>
                  </div>
                  <p
                    className={
                      selected2 === i
                        ? "tech_content show"
                        : "tech_content hide"
                    }
                  >
                    {item.techStackContent}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* Render dropdown button and the second ul only for mobile view */}
          {isMobileView && (
            <div className="dropdown-button">
              {isSecondListVisible && (
                <ul>
                  {data2.map((item, i) => (
                    <li key={i}>
                      <div
                        className="tech_stack_content"
                        style={{
                          position: "relative",
                          zIndex: 1,
                          border:
                            selected2 === i
                              ? `5px solid #162D6C`
                              : "5px solid transparent",
                          background:
                            selected2 === i
                              ? `linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.65)), url(${item.background}) no-repeat center center/102% 100%`
                              : "none",
                        }}
                      >
                        <div>
                          <div>
                            <span
                              style={{
                                background: selected2 === i ? `none` : "",
                                border:
                                  selected2 === i
                                    ? `1px solid transparent`
                                    : "",
                              }}
                            >
                              <img
                                src={item.logo}
                                alt={item.techstackName}
                                onClick={() => toggle2(i)}
                              />
                            </span>
                            <span onClick={() => toggle2(i)}>
                              {item.techstackName}
                            </span>
                          </div>
                          <span onClick={() => toggle2(i)}>
                            {selected2 === i ? (
                              <img src={MinusLogo} alt="Minus" />
                            ) : (
                              <img src={PlusLogo} alt="Plus" />
                            )}
                          </span>
                        </div>
                        <p
                          className={
                            selected2 === i
                              ? "tech_content show"
                              : "tech_content hide"
                          }
                        >
                          {item.techStackContent}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="drop-data">
                <div>
                  <button
                    onClick={toggleSecondList}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    {" "}
                    <div>
                      <img
                        src={isButtonClicked ? upperarrow : Dropdownarrow}
                        alt="dropdown"
                        className="drop-image"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="animation-part">
          <ul>
            {Array.from({ length: 1000 }, (_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
