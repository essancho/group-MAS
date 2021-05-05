import React from "react";
import { Link } from "react-router-dom";
import "./FrontNewLastCard.css";
const FrontNewLastCard = (props) => {
    return (
        
        <Link to={`/all-${props.category}`}>
            <div className="new-last-card">
                <div className="last-card-text">View All {props.category}</div>
            </div>
        </Link>
    );
};

export default FrontNewLastCard;
