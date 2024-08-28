import React from 'react'
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Casestudy from '../../Components/Casestudy/Casestudy';
import TechStack from '../../Components/TechStack/TechStack';
import Footer from '../../Components/Footer/Footer';
import OurOffice from '../../Components/OurOffice/OurOffice';
import LogoSlider from '../../Components/LogoSlider/LogoSlider';
import OurClientSay from "../../Components/OurClientSay/OurClientSay";

const HomePage = () => {
  return (
    <>
    <Header className="wrapper" bgColor={"#080D27"} position={"sticky"}/>
    <Banner />
    <TechStack/>
    <Casestudy/>
    <LogoSlider />
    <OurClientSay/>
    <OurOffice />
    <Footer/>
    </>
  )
}

export default HomePage;