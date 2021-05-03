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
                <Link to="/journal">
                    <div className="journal-big-category">
                        <span className="goods-btn">Journal</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GoodsJournal;
