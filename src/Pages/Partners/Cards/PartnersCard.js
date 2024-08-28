// Cards/Card.js

import React from "react";
import PropTypes from "prop-types";
import "./PartnersCard.css"; 

const Card = ({ image, title, description }) => {
  return (
    <ul className="partner-card">
      <li>
        <figure>
          <img src={image} alt={title} />
        </figure>
      </li>
      <li>
        <h3>{title}</h3>
      </li>
      <li>
        <p>{description}</p>
      </li>
    </ul>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
