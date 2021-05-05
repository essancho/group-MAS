import React from "react";
import "./WomenCover.css";
const WomenCover = (props) => {
    return (
        <div>
            <div className="women-cover-container">
                <span className="women-cover-title">{props.category}</span>
            </div>
        </div>
    );
};

export default WomenCover;
