import React from "react";
import Offers from "../../Offers/Offers";
import WomenAllLimit from "./WomenAllLimit";
import WomenCover from "./WomenCover";
import WomenOuterWearLimit from "./WomenOuterWearLimit";
import WomenPantsLimit from "./WomenPantsLimit";
import WomenShirtLimit from "./WomenShirtLimit";
import WomenTshirtLimit from "./WomenTshirtLimit";

const WomenCategory = () => {
    let category = "Women"
    return (
        <div>
            <WomenCover category={category} />
            <Offers />
            <WomenAllLimit />
            <WomenTshirtLimit />
            <WomenShirtLimit />
            <WomenPantsLimit />
            <WomenOuterWearLimit />
        </div>
    );
};

export default WomenCategory;
