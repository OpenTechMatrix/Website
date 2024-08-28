import React from "react"
import "./Card.css"
//import ClientImg from "../../Assets/images/ClientImg.png"
function Card(props) {
    const { name, designation, description, alt,clientImage } = props;
    return (
        <div className="cards-container">
            <div className="Cards">
                <h3>{name}</h3>
                <h5>{designation}</h5>
                <p>{description}</p>
                <img src={clientImage} alt={alt} />

            </div>

        </div>

    )
}

export default Card
