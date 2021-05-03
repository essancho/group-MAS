import React from "react";
import { Link } from "react-router-dom";
import "./FrontBigCategory.css";
const FrontBigCategory = () => {
    return (
        <div>
            <div className="category-container">
                <Link to="/men">
                    <div className="men-big-category">
                        <span className="category-btn">Men</span>
                    </div>
                </Link>
                <Link to="/women">
                    <div className="women-big-category">
                        <span className="category-btn">Women</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FrontBigCategory;
