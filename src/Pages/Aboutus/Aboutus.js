import React from "react";
import Footer from "../../Components/Footer/Footer";
import opentechmatrixLogo from "../../Assets/images/logo.png";
import "./Aboutus.css";
import Header from "../../Components/Header/Header";

const AboutUs = () => {
  return (
    <>
      <Header className="wrapper" bgColor={"#343434"} />
      <section className="about-us">
        <div className="overview-section">
          <div className="wrapper">
            <div className="three-column">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>overview</h3>
            <div className="overview">
              <div className="overviewLeft">
                <figure>
                  <img src={opentechmatrixLogo} alt="Tech matrix" />
                </figure>
                <p>
                  We stand by our core values of Trust, Communication &
                  Adaptability in every process and work.
                </p>
              </div>
              <ul className="overviewRight">
                <li>
                  <p>
                    Tech matrix is a young IT company with a dedicated team of
                    Developers, IT Engineers and Designers providing digital
                    transformation services globally since 2020.
                  </p>
                </li>
                <li>
                  <p>
                    We partner with clients to design and implement customized
                    solutions covering the entire development life cycle of
                    software. With cross-functional teams working across the
                    Indian subcontinent, we ensure special attention to the
                    requirements of every individual client.
                  </p>
                </li>
                <li>
                  <p>
                    Our continuous learning-and-progressing together agenda
                    empowers us to reimagine the future with the latest
                    technological advances of sustainable values
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="our-history">
          <div className="wrapper">
            <div className="three-column">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>our history</h3>
            <div className="history-years">
              <ul>
                <li>
                  <div>
                    <h4>2019</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2021</h4>
                    <p>
                      Remote working becomes the new normal. Another vertical -
                      "Pharma Analytics" established majorly serving domestic
                      pharma companies.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2023</h4>
                    <p>
                      Establishing a new trend of boot camps for freshers, where
                      they can learn from experienced professionals. opentechmatrix
                      will benefit from these assets in the future. We intended
                      to take as many boot campers as possible into the
                      opentechmatrix family, with immediate exposure to client.
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <h4>2020</h4>
                    <p>
                      TECH matrix established as a subsidiary company of matrix
                      I & C, adding global clients in the Tech Consulting domain
                      and providing domestic pharmaceutical companies with
                      Analytics solutions
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2022</h4>
                    <p>
                      In Tech matrix, hybrid working is the emerging trend. The
                      goal is to make the working environment as comfortable as
                      possible while achieving the best results.
                    </p>
                  </div>

                  <div className="new-div">
                    <h4>2024</h4>
                    <p></p>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <h4>2019</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2020</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2021</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2022</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>2023</h4>
                    <p>
                      Offshore tech team setup in Mumbai, India to support US
                      based clientele. A new "Technology Consulting" vertical
                      established in the existing business -matrix
                      Instrumentation & Controls (www.matrixcontrol.com)
                    </p>
                  </div>
                  <div>
                    <h4>2024</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Habitasse in
                      volutpat vitae mi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
