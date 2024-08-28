import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import mail from "../../Assets/images/Message-filled.png";
import call from "../../Assets/images/Call-filled.png";
import largeLogo from "../../Assets/images/footerLargeLogo.png";
import linkedin from "../../Assets/images/icons8-linkedin-64.png";
import twitterX from "../../Assets/images/icons8-twitterx-50.png";
import instagram from "../../Assets/images/icons8-instagram-logo-50.png";
import youtube from "../../Assets/images/icons8-youtube-50.png";
import "./Footer.css";

function Footer({ className }) {
  return (
    <div
      className={
        className ? `footer-container ${className}` : "footer-container"
      }
    >
      <div className="footer-info">
        <div>
          <div className="footer-quicklinks">
            <h2>quick links</h2>
            <ul>
              <li>
                <Link smooth to="/what-we-do" title="What We Do">
                  What We Do
                </Link>
              </li>
              <li>
                <Link smooth to="/who-we-are" title="Who We Are">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link smooth to="/case-study" title="Case Studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link smooth to="/talk-to-us" title="Talk to Us">
                  Talk to Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-reachUs">
            <h2>reach us</h2>
            <ul>
              <li>
                <figure>
                  <img src={mail} alt="mail" />
                </figure>
                <a href="mailto:info@opentechmatrix.com" title="info@opentechmatrix.com">
                  info@opentechmatrix.com
                </a>
              </li>
              <li>
                <figure>
                  <img src={call} alt="call" />
                </figure>
                <a href="tel:+919896899201" title="+91 9896899201">
                  +91 9896899201
                </a>
              </li>
            </ul>
          </div>
          <ul className="copyright-policy">
            <li>Copyright © 2024 Tech matrix Pvt Ltd.</li>
            <li className="footer-display-none">
              <a href="#FIXME" title="Privacy policy">
                Privacy policy
              </a>
            </li>
            <li className="footer-display-none">
              <a href="#FIXME" title="Terms of service">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-logo-socialIcons">
        <figure>
          <img src={largeLogo} alt="logo" />
        </figure>
        <p>
          <span>End-to-end Digital and IT solutions for</span>{" "}
          <span>business transformation</span>
        </p>
        <ul>
          <li className="links linkedIn">
            <a
              href="https://in.linkedin.com/company/tech-matrix"
              target="blank"
              title="Linked In"
            >
              <img src={linkedin} alt="linedin" />
            </a>
          </li>
          <li className="links X">
            <a href="#FIXME" target="blank" title="Twitter X">
              <img src={twitterX} alt="twitter X" />
            </a>
          </li>
          <li className="links instagram">
            <a
              href="https://www.instagram.com/opentechmatrix.com/?igsh=MjFva3B2Nm81bmV5"
              target="blank"
              title="Instagram"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="links youtube">
            <a
              href="https://www.youtube.com/@opentechmatrix9923"
              target="blank"
              title="Youtube"
            >
              <img src={youtube} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
