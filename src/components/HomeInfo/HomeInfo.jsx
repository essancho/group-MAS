import React from "react";
import "./HomeInfo.css";

import Cover from "../Cover/Cover";
import Offers from "../Offers/Offers";
import FrontBigCategory from "../FrontBigCategory/FrontBigCategory";
import FrontNewArrivals from "../FrontNewArrivals/FrontNewArrivals";
import GoodsJournal from "../GoodsJournal/GoodsJournal";
import FrontSaleProducts from "../FrontSaleProducts/FrontSaleProducts";
import { Container } from "@material-ui/core";

const HomeInfo = () => {
    return (
        <>
            <Cover />
            <Offers />
            <FrontBigCategory />
            <FrontNewArrivals />
            <FrontSaleProducts />
            <GoodsJournal />
        </>
    );
};

export default HomeInfo;
