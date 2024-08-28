import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurEmployeesWords.css";
// import EmployeeImg_Zohair from "../../Assets/images/EmployeeImg_Zohair.png";
import EmployeeImg_Ajay from "../../Assets/images/EmployeeImg_Ajay.jpg";
import AkashImg from "../../Assets/images/AkashImg.jpg";
// import IshaImg from "../../Assets/images/IshaImg.png";
import PramodImg from "../../Assets/images/PramodImg.jpg";
import EmployeeImg_Rupali from "../../Assets/images/EmployeeImg_Rupali.png";
import EmployeeImg_Kaustubh from "../../Assets/images/EmployeeImg_Kaustubh.png";

const OurEmployeesWords = () => {
  const sliderRef = useRef(null);
  const [currentEmployee, setCurrentEmployee] = useState(0);
  const settings = {
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentEmployee(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "125px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "135px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          centerPadding: "95px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          centerMode: true,
          centerPadding: "80px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const employees = [
    {
      name: "Ajay Kumar",
      designation: "Sr.Software Developer",
      feedback:
        "For the past two years, I've had the privilege of working at Tech matrix, and it's been a rewarding experience filled with growth and accomplishment. I've been involved in many projects as a Senior Software developer. My contribution to projects has been meaningful and innovative because of Tech matrix's collaborative, innovative culture. My role requires me to work with a team that values excellence, fosters creativity, and consistently delivers top-notch solutions for our clients.",
    },
    {
      name: "Akash Sharma",
      designation: "Sr.Software Developer",
      feedback:
        "Dedicated team committed to excellence, innovation, and customer satisfaction. Together, we shape the future with passion and integrity",
    },
    {
      name: "Pramod Bhatt",
      designation: "Solution Architect",
      feedback:
        "We are more than a company; we're a community dedicated to excellence. Together, we innovate, inspire, and grow. Our passion drives us to exceed expectations, delivering quality and value every step of the way.",
    },
    // {
    //   name: "Zohair Irani",
    //   designation: "Team Lead",
    //   feedback:
    //     "Working with Tech matrix for three years since its early days has been an incredible journey. From a tight-knit team of 5, we've expanded to a vibrant family of 40. Tech matrix isn't just about tech; it's about crafting experiences for our clients. Quality is non-negotiable here, from robust software solutions to dedicated services. Tech matrix's growth is a testament to its unwavering dedication to serving clients and delivering top-notch quality in every project that it has undertaken.",
    // },
    {
      name: "Rupali Chavan",
      designation: "Admin/HR",
      feedback:
        "I've totally levelled up since I joined Tech matrix. It's awesome to take a sec and appreciate how much progress I've made. Being part of an awesome team in a cool environment is hands down the best part of my job. We've got each other's backs, always cheering each other on to do our best. It's a constant learning curve here, but that's what keeps me pumped. Feeling pretty stoked about where I'm at right now.",
    },
    {
      name: "Kaustubh Chonkar",
      designation: "Associate Manager",
      feedback:
        "For almost 2 years, I've been with Tech matrix and it's been awesome. I've worked on lots of different platforms, so I've had a blast. Since joining Tech matrix, I've taken a big leap forward in my career. Working with Tech matrix feels awesome. The team members, seniors, and work culture are great. I'm thrilled to be a part of the Tech matrix family because of its great prospects and opportunities.",
    },
  ];

  return (
    <>
      <div className="WWA_OurEmployeesWords">
        <div className="wrapper">
          <h2 className="WWA_Header">
            OUR <span className="WWA_SubHeader"> EMPLOYEES WORDS </span>
          </h2>
          <p className="WWA_Text">Here are some thoughts.</p>
          <div className="OOE_Container">
            <div className="Client_Words">
              <div className="Employee_details">
                <h3 className="Employee_name">
                  {employees[currentEmployee].name}
                </h3>
                <h5 className="Employee_designation">
                  {employees[currentEmployee].designation}
                </h5>

                <div className="Feedback_content">
                  <p className="Employee_feedback">
                    “{employees[currentEmployee].feedback}”
                  </p>
                </div>
              </div>
            </div>
            <div className="slider_container">
              <Slider ref={sliderRef} {...settings}>
                <div className="img-container">
                  <img
                    src={EmployeeImg_Ajay}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={AkashImg}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={PramodImg}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div>
                {/* <div className="img-container">
                  <img
                    src={EmployeeImg_Zohair}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div> */}
                <div className="img-container">
                  <img
                    src={EmployeeImg_Rupali}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={EmployeeImg_Kaustubh}
                    alt="unable to load"
                    className="OEW_Emp"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurEmployeesWords;
