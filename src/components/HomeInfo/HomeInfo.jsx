import React from "react";
import "./HomeInfo.css";

import Cover from "../Cover/Cover";
import Offers from "../Offers/Offers";
import FrontBigCategory from "../FrontBigCategory/FrontBigCategory";
import FrontNewArrivals from "../FrontNewArrivals/FrontNewArrivals";
import GoodsJournal from "../GoodsJournal/GoodsJournal";

const HomeInfo = () => {
    return (
        <>
            <Cover />
            <Offers />
            <FrontBigCategory />
            <FrontNewArrivals />
            <GoodsJournal />
        </>
    );
};

export default HomeInfo;
