import React from "react";
import '../styles/card.css';

const Card = ({ img, name, description }) => {
    return (
        <div className="card-spec">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
