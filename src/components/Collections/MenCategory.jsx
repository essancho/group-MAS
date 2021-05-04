import React from "react";
import Offers from "../Offers/Offers";
import MenAllProducts from "./MenAllProducts/MenAllProducts";
import MenCover from "./MenCover/MenCover";
import MenOWlimit from "./MenOWlimit/MenOWlimit";
import MenPantsLimit from "./MenPantsLimit/MenPantsLimit";
import MenShirtLimit from "./MenShirtLimit/MenShirtLimit";
import MenTshirtLimit from "./MenTshirtLimit/MenTshirtLimit";

const MenCategory = () => {
    return (
        <div>
            <MenCover />
            <Offers />
            <MenAllProducts />
            <MenTshirtLimit />
            <MenShirtLimit />
            <MenPantsLimit />
            <MenOWlimit />
        </div>
    );
};

export default MenCategory;
