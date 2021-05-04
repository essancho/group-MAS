import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";
const WomenShirtLimit = () => {
    const { womenShirt, getWomenShirtCollection } = useContext(productsContext);
    useEffect(() => {
        getWomenShirtCollection(8);
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">Shirting</h4>
                <div className="men-all">
                    {womenShirt &&
                        womenShirt.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default WomenShirtLimit;
