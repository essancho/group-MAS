import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";
const WomenAllLimit = () => {
    const { womenProducts, getWomenCollection } = useContext(productsContext);
    useEffect(() => {
        getWomenCollection();
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">All Womens</h4>
                <div className="men-all">
                    {womenProducts &&
                        womenProducts.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default WomenAllLimit;
