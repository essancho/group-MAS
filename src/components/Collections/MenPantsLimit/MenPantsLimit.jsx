import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";
const MenPantsLimit = () => {
    const { menPants, getMenPantsCollection } = useContext(productsContext);
    useEffect(() => {
        getMenPantsCollection();
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">Bottoms</h4>
                <div className="men-all">
                    {menPants &&
                        menPants.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default MenPantsLimit;
