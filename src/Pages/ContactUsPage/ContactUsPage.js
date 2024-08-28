import React, { useEffect } from 'react'
import Contact from '../../Components/NewFooter/NewFooter'
import Header from '../../Components/Header/Header';
import "./ContactUsPage.css";

const ContactUsPage = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className='contact-us-page'>
    <Header
        bgColor={
          "rgb(8, 13, 39)"
        }      
      />
    <Contact/>
    </div>
  )
}

export default ContactUsPage;