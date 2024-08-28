import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import call from "../../../Assets/images/wannatalkcall.png";

function Header({ bgColor, position, displayNone }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className="headerContainer"
      style={{
        backgroundColor: bgColor,
        position: position,
        zIndex: 1000000,
        display: displayNone,
      }}
    >
      <header className="wrapper headerNav">
        <h1 className="logo">
          <Link to="/" title="Tech matrix">
            <img src={logo} alt="Tech matrix" />
            <span>Trust . Adaptability . Communication</span>
          </Link>
        </h1>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`bar1 ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar2 ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar3 ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/what-we-do" title="What we do">
                what we do
              </Link>
            </li>
            <li>
              <Link to={"/who-we-are"} title="Who we are">
                who we are
              </Link>
            </li>
            <li>
              <Link to={"/case-study"} title="Case studies">
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to={"/talk-to-us"}
                title="Talk to us"
                className="talk-to-us"
              >
                talk to us
              </Link>
            </li>

            <li className="wannatalk">
              <Link to={"/talk-to-us"} title="Talk to us">
                <figure>
                  <img src={call} alt="Wanna talk" />
                </figure>
                talk to us
              </Link>
              <span className="test">test</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
