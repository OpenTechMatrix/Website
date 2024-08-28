import React from "react";
import arrowRight from "../../Assets/images/Arrow.png";
import "./Banner.css";
import { Link } from "react-router-dom";
import call from "../../Assets/images/wannatalkcall.png";
function Banner() {
  return (
    <>
      <div className="banner">
        <div className="wrapper">
          <section className=" hero">
            <h2>
              <div id="textContainer">
                <p>Digital & IT </p>
                <p>Solutions </p>
                <p>for</p>
                <p>Business</p>
                <p>Transformation</p>
              </div>
              <a href="#FIXME">
                {" "}
                {/* <img src={arrowRight} alt="arrowRight" /> */}
              </a>
            </h2>
          </section>
        </div>
      </div>
      <section className="heromobile">
        <h2>
          <div id="textContainer">
            <p>
              Digital & IT <br></br>
              Solutions for<br></br> Business Transformation
            </p>
          </div>
          <a href="#FIXME">
            {" "}
            <img src={arrowRight} alt="arrowRight" className="heromobileimg" />
          </a>
        </h2>
        <li className="wannatalk">
          <Link to={"/talk-to-us"} title="Wanna talk">
            <figure>
              <img src={call} alt="Wanna talk" />
            </figure>
            talk to us
          </Link>
        </li>
      </section>
    </>
  );
}

export default Banner;
