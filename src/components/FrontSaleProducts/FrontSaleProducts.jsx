import React, { useContext, useEffect } from "react";
import "./FrontSaleProducts.css";
import { productsContext } from "../../contexts/ProductContext";
import FrontNewCards from "../FrontNewArrivals/FrontNewCards";
import { Container } from "@material-ui/core";
import FrontNewLastCard from "../FrontNewArrivals/FrontNewLastCard";

const FrontSaleProducts = () => {
    const { saleProducts, getSaleCollection } = useContext(productsContext);
    useEffect(() => {
        getSaleCollection();
    }, []);
    return (
        <div className="new-wrapper">
            <Container>
                <h4 className="new-title">On Sale</h4>
                <div className="new-arrivals">
                    {saleProducts &&
                        saleProducts.map((item) => (
                            <FrontNewCards
                                key={item.id}
                                id={item.id}
                                item={item}
                            />
                        ))}
                    <FrontNewLastCard />
                </div>
            </Container>
        </div>
    );
};

export default FrontSaleProducts;
