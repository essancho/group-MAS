import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";
const WomenTshirtLimit = () => {
    const { womenTshirt, getWomenTshirtCollection } = useContext(
        productsContext
    );
    useEffect(() => {
        getWomenTshirtCollection(8);
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">T-Shirt's</h4>
                <div className="men-all">
                    {womenTshirt &&
                        womenTshirt.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default WomenTshirtLimit;
