import React,  { useState, useEffect } from 'react'
import './WhoWeAre.css'
import WhoWeAreEvents from '../../Components/WhoWeAreEvents/WhoWeAreEvents';
import WhoWeAreCounter from "../../Components/WhoWeAreCounterScreen/WhoWeAreCounterScreen"
import Timeline from "../../Components/WhoWeAreTimeline/WhoWeAreTimeline"
import OurEmployeesWords from '../../Components/OurEmployeesWords/OurEmployeesWords';
import NewFooter from '../../Components/NewFooter/NewFooter'
import WWDHeader from '../WhatWeDo/WWDHeader/WWDHeader';

function WhoWeAre() {

      const [scrollHeight, setScrollHeight] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.scrollY;
            setScrollHeight(scrollHeight);
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.scrollTo(0,0)
        };
    }, []);

    return (
        <>
        <WWDHeader displayNone={scrollHeight > 3243 ? 'none' : ''} bgColor={'#080D27'} position={'fixed'}  />
        <div className='whoWeAre'>

            <div className="scroll-item">
                <WhoWeAreCounter />
            </div>
            <div className="scroll-item">
                <Timeline />
            </div>
            <div className="scroll-item">
                <WhoWeAreEvents/>
            </div>
            <div className="scroll-item">
            <OurEmployeesWords/>
            </div>
            <div className="scroll-item" id='getconsulation'>
                <NewFooter />
            </div>
        </div>
        </>
    )
}

export default WhoWeAre
