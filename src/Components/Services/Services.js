import React from 'react'
import './Services.css'
import { useState } from 'react';
import click from '../../Assets/images/click2.png'

function Services() {

  // const [isOpen, setIsOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseLeave = () => {

    setTimeout(() => {
      setOpenIndex(null);
    }, 400);
  };

  return (
    <>
   
        <div className="accordion wrapper ">
          <div className='vertical_line'>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="accordian-header">
            <h2>We research, design & develop</h2>
          </div>

          <div className={`accordion-item ${openIndex === 0 ? 'active' : ''}`} onMouseLeave={handleMouseLeave} >
            <div className="accordion-title" onMouseEnter={() => handleToggle(0)} >
              <p>Software</p>
            </div>
            <div className="accordion-content">
              <p> Tech matrix is determined in achieving quality work and <br/>maintaining a standard in all the projects, by utilizing the power of.</p>
              <span className='accordion-img'> <img src={click} alt="" /> </span>

            </div>
          </div>

          <div className={`accordion-item ${openIndex === 2 ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
            <div className="accordion-title" onMouseEnter={() => handleToggle(2)}>
              <p>Design</p>
            </div>
            <div className="accordion-content">
              <p> Tech matrix is determined in achieving quality work and<br/> maintaining a standard in all the projects, by utilizing the power of.</p>
              <span className='accordion-img'> <img src={click} alt="" /> </span>
            </div>

          </div>

        </div>

    </>
  )
}

export default Services
