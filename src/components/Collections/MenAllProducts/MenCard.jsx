import React, { useState } from "react";
import "./MenCard.css";
const MenCard = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="men-cards"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="new">
                <span>NEW</span>
            </div>
            {hover ? (
                <img src={props.item.img2} alt="" />
            ) : (
                <img src={props.item.img1} alt="" />
            )}
            <br />
            <span className="men-cards-title">{props.item.title}</span> <br />
            <span className="men-cards-price">${props.item.price}.00</span>
        </div>
    );
};

export default MenCard;
