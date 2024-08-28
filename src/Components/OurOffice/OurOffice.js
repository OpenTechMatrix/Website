import React from 'react';
import { OfficeLocation } from './OfficeLocation';
import LocationIcon from "../../Assets/images/icons-location.png";
import "./OurOffice.css"

const OurOffice = () => {
  return (
    <section className="our_office">
        <div className="wrapper">
            <div>
                <h3>our offices</h3>
                <div className="office_location">
                    {
                        OfficeLocation.map((item) => (
                            <ul key={item.id}>
                                <li><h3>{item.countryName}</h3></li>
                                
                                <li><span><img src={LocationIcon} alt="Location Icon" /></span>
                                <h6>{item.address}</h6>
                                <p>Phone: {item.phoneNumber}</p>
                                <p>Email: {item.email}</p>
                                </li>
                                <li><img src={item.officeImage} alt={item.address} /></li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurOffice;