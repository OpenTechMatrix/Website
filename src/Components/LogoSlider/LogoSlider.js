import React from 'react'
import './LogoSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from '../../Assets/images/Partners/apexon.png'
import Logo2 from '../../Assets/images/Partners/enrich.png'
import Logo3 from '../../Assets/images/Partners/etailinsights1.png'
import Logo4 from '../../Assets/images/Partners/itpeople.png'
import Logo5 from '../../Assets/images/Partners/lenovo.png'
import Logo6 from '../../Assets/images/Partners/openGateCapital.png'
import Logo7 from '../../Assets/images/Partners/weShape.png'
import Logo8 from '../../Assets/images/Partners/wunderkind.png'
import Logo9 from '../../Assets/images/Partners/salate.png'
import Logo10 from '../../Assets/images/Partners/fci.png'
import Logo11 from '../../Assets/images/Partners/MDS.png'
import Logo12 from '../../Assets/images/Partners/Novelcx.png'
import Logo13 from '../../Assets/images/Partners/nxivi.png'
import Logo14 from '../../Assets/images/Partners/aurotech.png'
import Logo15 from '../../Assets/images/Partners/myxx.png'
import Logo16 from '../../Assets/images/Partners/ispace.png'



function LogoSlider() {


  const Logo = [{
    id: 1,
    img: Logo1,
  }, {
    id: 2,
    img: Logo2,
  }, {
    id: 3,
    img: Logo3,
  }, {
    id: 4,
    img: Logo4,
  }, {
    id: 5,
    img: Logo5,
  }, {
    id: 6,
    img: Logo6,
  }, {
    id: 7,
    img: Logo7,
  }, {
    id: 8,
    img: Logo8,
  }, {
    id: 9,
    img: Logo9,
  }, {
    id: 10,
    img: Logo10,
  },
  {
    id: 11,
    img: Logo11,
  },
  {
    id: 12,
    img: Logo12,
  },
  {
    id: 13,
    img: Logo13,
  },
  {
    id: 14,
    img: Logo14,
  },
  {
    id: 15,
    img: Logo15,
  },
  {
    id: 16,
    img: Logo16,
  }

  ]

  const slider = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <>
      <div className="logo_slider_container">
        <div className="logo_slider">
          <div className="logos">
            <Slider {...slider}>

              {Logo.map((data, index) => (

                <figure key={index}>
                  <img src={data.img} data-id={data.id} alt="" />
                </figure>

              ))
              }

            </Slider>
          </div>
        </div>
      </div>


    </>
  )
}

export default LogoSlider
