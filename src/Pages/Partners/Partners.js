import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Card from "./Cards/PartnersCard";
import "./Partners.css";
import wunderkindLogo from "../../Assets/images/Partners/wunderkind.png"
import etailinsight from "../../Assets/images/Partners/etailinsights.png"
import apexon from "../../Assets/images/Partners/apexon.png"
import enrich from "../../Assets/images/Partners/enrich.png"
import itpeople from "../../Assets/images/Partners/itpeople.png"
import lenovo from "../../Assets/images/Partners/lenovo.png"
import openGateCapital from "../../Assets/images/Partners/openGateCapital.png"

const Partners = () => {
  // Dummy data for the Card component
  const dummyData = [
    {
      image: wunderkindLogo,
      title: "Wunderkind",
      description: "Wunderkind is a leading company in innovative solutions for digital marketing and customer engagement. They excel in creating cutting-edge strategies to elevate brand presence and enhance customer experiences.",
    },
    {
      image: etailinsight,
      title: "Etailinsights",
      description: "Etailinsights is a platform that provides lead generation solutions and contact information for online retailers and shops. It also includes a Shopping Cart Analyzer that allows users to see eCommerce technologies and other data for the current website tab",
    },
    {
      image: apexon,
      title: "Apexon",
      description: "Apexon is a diverse, global blend of talent, technical expertise and entrepreneurial spirit that inspires collaboration, innovation and results for our clients.",
    },
    {
      image: enrich,
      title: "Enrich",
      description: "The company provides home services, retail and online options for customers who want to enhance their appearance and well-being. The page also showcases some of the company’s features, such as quality, convenience, affordability and customer satisfaction",
    },
    {
      image: itpeople,
      title: "It People",
      description: "IT People is a company that provides IT services and workforce solutions to businesses of all sizes. They have been in business since 1999 and have experience in a wide range of technologies, including blockchain consulting.",
    },
    {
      image: lenovo,
      title: "Lenovo",
      description: "Lenovo is a leading computer hardware and electronics manufacturer, providing cutting-edge solutions for gaming, artificial intelligence, and deep learning. They are dedicated to delivering high-performance technology to meet the evolving needs of users worldwide.",
    },
    {
      image: openGateCapital,
      title: "Open Gate Capital",
      description: "OpenGate Capital is a private equity firm that acquires businesses in North America and Europe. The firm manages a global portfolio across key verticals, including industrials.",
    },
];

  


  return (
    <>
      {/* Header Sections */}
      <Header className="wrapper" bgColor={"#323232"} position="static"/>

      <div className="partner-studies-page">
        {/* Links Sections */}
        <div className="partner-studies-links">
          <div className="wrapper">
            <Link to={"/"} title="Home Page">
              home 	&gt;
            </Link>
            <Link to={"/partners"} title="Home Page">
              partners
            </Link>
          </div>
        </div>

        {/* partner Sections */}
        <div className="partner-studies">
          <div className="wrapper">
            <div className="three-column partner-studies-columns">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2>partners</h2>
            <div className="partner-card-sections">
              {dummyData.map((data, index) => (
                <Card
                  key={index}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />

              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Partners;
