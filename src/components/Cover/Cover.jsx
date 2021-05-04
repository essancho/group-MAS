import React from "react";
import "./Cover.css";

import { Link } from "react-router-dom";
const Cover = () => {
    return (
        <div>
            <div className="cover-container">
                <span className="cover-title">Spring '21 New Arrivals</span>
                <span className="cover-desc">
                    <strong>ONLINE NOW</strong>
                </span>
                <div className="cover-btns">
                    <Link to="/men">
                        <button className="cover-btn">Shop Men's</button>
                    </Link>
                    <Link to="/women-category">
                        <button className="cover-btn">Shop Women's</button>
                    </Link>
                    <button className="cover-btn">Shop Goods</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;
