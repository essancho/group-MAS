import React from "react";
import Offers from "../Offers/Offers";
import MenAllProducts from "./MenAllProducts/MenAllProducts";
import MenCover from "./MenCover/MenCover";

const MenCategory = () => {
    return (
        <div>
            <MenCover />
            <Offers />
            <MenAllProducts />
        </div>
    );
};

export default MenCategory;
