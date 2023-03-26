import React from "react";

const Cards = ({image, title, price, description}) => {
    return(
    <div className="cards">
        <img width="300px" src={image} alt="Grilled fish"/>
        <div className="dish-info">
            <h3>{title}</h3>
            <p className="price">${price}</p>
        </div>
        <p>{description}</p>
    </div>);
}

export default Cards;
