import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurClientSay.css";
import Card from "./Card";
// import clientImage1 from "../../Assets/images/clientImage1.png";
// import clientImage2 from "../../Assets/images/clientImage2.png";
// import ClientImg from "../../Assets/images/ClientImg.png";
import FrancesHo from "../../Assets/images/FrancesHo.png";
import ErikMinges from "../../Assets/images/ErikMinges.png";
import Tobias from "../../Assets/images/Tobias.png";
import Quincy from "../../Assets/images/Quincy.png";
import Marc from "../../Assets/images/Marc.png";

function OurClientsSay() {
  const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev" onClick={props.onClick}>
      {/* Your custom previous arrow content */}
      &lt;
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next" onClick={props.onClick}>
      {/* Your custom next arrow content */}
      &gt;
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <span className="custom-dot">
          {/* You can add custom styling for dots */}
        </span>
      );
    },
  };

  return (
    <div className="OurClientsSay">
      <div className="animation-part">
        <ul>
          {Array(150)
            .fill("<li></li>")
            .map((x, index) => (
              <li key={index}></li>
            ))}
        </ul>
      </div>
      <div className="wrapper">
        <h2>voices of satisfaction</h2>
        <p>Client Testimonials</p>
        <div className="slider-container">
          <Slider {...settings}>
            <Card
              name="Frances Ho"
              designation="Director of Engineering (Myxx, North Carolina)"
              description="I always have the best experience with Tech matrix. Their team is reliable, responsive, and works closely with ours to ensure we always have the right people for the job."
              alt="Alt text for image 1"
              clientImage={FrancesHo}
            />
            <Card
              name="Erik Minges"
              designation="Senior Engineering Manager (Wunderkind, New York)"
              description="I've worked with Tech matrix for several years now and they have consistently provided my companies with top Engineering talent and proper support. Some of their resources have become key drivers on our teams."
              alt="Alt text for image 1"
              clientImage={ErikMinges}
            />
            <Card
              name="Tobias Freund"
              designation="CEO (WeShape, Germany)"
              description="Absolutely thrilled with the CSR platform crafted by the dedicated team at Tech matrix. Their effort went above and beyond, delivering top-notch quality within our budget. A solid win for our stakeholders! Danke schön, Tech matrix!"
              alt="Alt text for image 1"
              clientImage={Tobias}
            />
            <Card
              name="Quincy McIlvaine"
              designation="Email and IESP Integration manager"
              description="Working with Tech matrix was incredible! Once the team was onboarded they were a well-oiled machine!
              I would tag things in for the TS team and the engineers were responsible for picking up their own tasks; I swear nothing sat in the queue for more than 3 working hours. The team leads were great at communicating when there were issues or if they needed more work in the queue.
              Over the year and a half we had together, the TS team closed out over 1,100 tickets, which is incredible! We would have drown without them on our team."
              alt="Alt text for image 1"
              clientImage={Quincy}
            />
            <Card
              name="Marc Hedlund"
              designation="Senior Email Engineer (Wunderkind, New York)"
              description="I've had the pleasure of partnering with Tech matrix and training onboarding their team to learn about our company's platform and services. The communication and collaboration have been nothing but positive. While in a unique space in the tech industry, Tech-matrix has been adaptable and accommodating to what is needed."
              alt="Alt text for image 1"
              clientImage={Marc}
            />
            <Card
              name="You're next,"
              designation=""
              description="We would be delighted to work with you and deliver an incredible experience."
              alt=""
            />
            {/* <Card
              name="Alicia Barker"
              designation="Cyberleap"
              description="The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions."
              alt="Alt text for image 1"
              clientImage={clientImage2}
            />
            <Card
              name="Becky Snider"
              designation="Floclips"
              description="Switched to Xora last month, and I'm already seeing results. Best decision for our team!"
              alt="Alt text for image 1"
              clientImage={ClientImg}
            />
            <Card
              name="Monsica Sounders"
              designation="Cyberleap"
              description="Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them."
              alt="Alt text for image 1"
              clientImage={clientImage1}
            />
            <Card
              name="Alicia Barker"
              designation="Cyberleap"
              description="The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions."
              alt="Alt text for image 1"
              clientImage={clientImage2}
            />
            <Card
              name="Becky Snider"
              designation="Floclips"
              description="Switched to Xora last month, and I'm already seeing results. Best decision for our team!"
              alt="Alt text for image 1"
              clientImage={ClientImg}
            /> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurClientsSay;
