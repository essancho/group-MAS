import React from "react";
import { Link } from "react-router-dom";
import "./GoodsJournal.css";
const GoodsJournal = () => {
    return (
        <div>
            <div className="good-journal-container">
                <Link to="/goods">
                    <div className="goods-big-category">
                        <span className="goods-btn">Goods</span>
                    </div>
                </Link>
                <Link to="/all-collection">
                    <div className="all-big-category">
                        <span className="goods-btn">The Collection</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GoodsJournal;
