import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import "./WhoWeAreHeader.css"; // Make sure to import your CSS file

function WhoWeAreHeader({ bgColor, position }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="WWAHeader" style={{ backgroundColor: bgColor }}>
      <div className="wrapper">
        <div>
          <Link to={"/"} className="logo" title="Tech matrix">
            <figure>
              <img src={logo} alt="Tech matrix" />
            </figure>
          </Link>

          <div
            className={`menuIcon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className={`bar_1 ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar_2 ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar_3 ${isMenuOpen ? "open" : ""}`}></div>
          </div>

          <nav className={`navLinks ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/what-we-do" title="What We Do">
                  what we do
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" title="Who We Are">
                  who we are
                </Link>
              </li>
              <li>
                <Link to={"/case-study"} title="Home Page">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/talk-to-us" title="Case Studies">
                  Talk to Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default WhoWeAreHeader;
