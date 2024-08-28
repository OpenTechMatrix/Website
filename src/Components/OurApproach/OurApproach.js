import React from "react";
import { useState } from "react";
import "./OurApproach.css";
import OurApproachCircle from "../../Assets/images/ourApproach-circle.png";
import Ideate from "../../Assets/images/Ideate-icon.png";
import Design from "../../Assets/images/Design-icon.png";
import Develop from "../../Assets/images/Develop-icon.png";
import Deploy from "../../Assets/images/Deploy-icon.png";
import leftArrow from "../../Assets/images/left-arrow.png";
import OurApproachCircleBlue from "../../Assets/images/ourApproach-blueCircle.png";
import IdeateBlue from "../../Assets/images/ideate-icon-blue.png";
import DesignBlue from "../../Assets/images/design-icon-blue.png";
import DevelopBlue from "../../Assets/images/develop-icon-blue.png";
import DeployBlue from "../../Assets/images/deploy-icon-blue.png";

function OurApproach() {
  const [isMouseIdeateOver, setIsMouseIdeateOver] = useState(false);
  const [isMouseDesignOver, setIsMouseDesignOver] = useState(false);
  const [isMouseDevelopOver, setIsMouseDevelopOver] = useState(false);
  const [isMouseDeployOver, setIsMouseDeployOver] = useState(false);

  const handleIdeateMouseOver = () => {
    setIsMouseIdeateOver(true);
  };

  const handleIdeateMouseOut = () => {
    setIsMouseIdeateOver(false);
  };

  const handleDesignOver = () => {
    setIsMouseDesignOver(true);
  };

  const handleDesignOut = () => {
    setIsMouseDesignOver(false);
  };

  const handleDevelopOver = () => {
    setIsMouseDevelopOver(true);
  };

  const handleDevelopOut = () => {
    setIsMouseDevelopOver(false);
  };

  const handleDeployOver = () => {
    setIsMouseDeployOver(true);
  };

  const handleDeployOut = () => {
    setIsMouseDeployOver(false);
  };

  return (
    <section className="approach">
      <div className="wrapper">
        <h3>our approach</h3>
        <p>We follow an agile approach with continuous feedback control</p>
        <ul>
          <li>
            <div>
              <div className="digit-one one">1</div>
              <figure
                className="zoom"
                onMouseOver={handleIdeateMouseOver}
                onMouseOut={handleIdeateMouseOut}
              >
                <img
                  src={
                    isMouseIdeateOver
                      ? OurApproachCircleBlue
                      : OurApproachCircle
                  }
                  alt=""
                  className="ourApproachCircle"
                />{" "}
                <img
                  src={isMouseIdeateOver ? IdeateBlue : Ideate}
                  alt="Unable to load"
                  className="ideateImg"
                />
              </figure>
              <h4>Ideate</h4>
              <p className="ideate-content">
                Turn your idea from concept to MVP
              </p>
            </div>
          </li>
          <span className="ourApproachArrow">
            <img src={leftArrow} alt="" />
          </span>
          <li>
            <div>
            <div className="digit-one">2</div>
              <figure
                className="zoom"
                onMouseOver={handleDesignOver}
                onMouseOut={handleDesignOut}
              >
                <img
                  src={
                    isMouseDesignOver
                      ? OurApproachCircleBlue
                      : OurApproachCircle
                  }
                  alt=""
                  className="ourApproachCircle"
                />{" "}
                <img
                  src={isMouseDesignOver ? DesignBlue : Design}
                  alt="Unable to load"
                  className="designImg"
                />
              </figure>
              <h4>Design</h4>
              <p className="design-content">
                Sketch out the product to align the user needs
              </p>
            </div>
          </li>
          <span className="ourApproachArrow">
            <img src={leftArrow} alt="" />
          </span>
          <li>
            <div>
            <div className="digit-one">3</div>
              <figure
                className="zoom"
                onMouseOver={handleDevelopOver}
                onMouseOut={handleDevelopOut}
              >
                <img
                  src={
                    isMouseDevelopOver
                      ? OurApproachCircleBlue
                      : OurApproachCircle
                  }
                  alt=""
                  className="ourApproachCircle"
                />{" "}
                <img
                  src={isMouseDevelopOver ? DevelopBlue : Develop}
                  alt="Unable to load"
                  className="developImg"
                />
              </figure>
              <h4>Develop</h4>
              <p className="develop-content">
                Convert the designs into a live application
              </p>
            </div>
          </li>
          <span className="ourApproachArrow">
            <img src={leftArrow} alt="" />
          </span>
          <li>
            <div className="deploy-content">
            <div className="digit-one">4</div>
              <figure
                className="zoom"
                onMouseOver={handleDeployOver}
                onMouseOut={handleDeployOut}
              >
                <img
                  src={
                    isMouseDeployOver
                      ? OurApproachCircleBlue
                      : OurApproachCircle
                  }
                  alt=""
                  className="ourApproachCircle"
                />{" "}
                <img
                  src={isMouseDeployOver ? DeployBlue : Deploy}
                  alt="Unable to load"
                  className="deployImg"
                />
              </figure>
              <h4>Deploy</h4>
              <p>Launching the application to the market</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OurApproach;
