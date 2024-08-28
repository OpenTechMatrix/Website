import React, { useEffect, useState } from "react";
import TotalClient from "../../Assets/images/total-client.png";
import TotalProjects from "../../Assets/images/total-projects.png";

import "./WhoWeAreCounterScreen.css";
function WhoWeAreCounterScreen() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 25) {
        setCount1((prevCount) => prevCount + 2);
      } else {
        clearInterval(interval1);
      }
    }, 15);

    const interval2 = setInterval(() => {
      if (count2 < 100) {
        setCount2((prevCount) => prevCount + 2);
      } else clearInterval(interval2);
    }, 10);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [count1, count2]);

  return (
    <>
      <div className="WhoWeAreBanner">
        <div className="counter-screen">
          <div className="WWAwrapper">
            <div className="total">
              <img src={TotalClient} alt="clients" className="counter_logo" />
              <div className="counter">{count1 + "+"}</div>
              <p>TOTAL CLIENTS</p>
            </div>
            <div className="total">
              <img
                src={TotalProjects}
                alt="projects"
                className="counter_logo"
              />
              <div className="counter">{count2 + "+"}</div>
              <p>TOTAL PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAreCounterScreen;
