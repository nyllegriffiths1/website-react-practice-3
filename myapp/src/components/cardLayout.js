import React from "react";
import Card from "./card.js"; // Import the Card component
import '../styles/card.css';

const CardLayout = () => {
    const data = [
        {
            img: "path_to_image1.jpg",
            name: "Nylle",
            description: "Lorem ipsum"
        },
        {
            img: "path_to_image2.jpg",
            name: "Rachel",
            description: "Lorem ipsum"
        }
    ];
    

    return (
        <div className="card-container">
            {/* Map over the data array and create a Card component for each item */}
            {data.map((item, index) => (
                <Card
                    key={index} // Key should be unique for each Card component
                    img={item.img}
                    name={item.name}
                    description={item.description}
                />
                
            ))}
        </div>
    );
};

export default CardLayout;
