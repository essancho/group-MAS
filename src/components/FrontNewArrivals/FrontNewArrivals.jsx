import React, { useContext, useEffect } from "react";
import "./FrontNewArrivals.css";
import { productsContext } from "../../contexts/ProductContext";
import FrontNewCards from "./FrontNewCards";
import { Container } from "@material-ui/core";
import FrontNewLastCard from "./FrontNewLastCard";

const FrontNewArrivals = () => {
    const { newProducts, getNewCollection } = useContext(productsContext);
    useEffect(() => {
        getNewCollection();
    }, []);
    return (
        <div className="new-wrapper">
            <Container>
                <h4 className="new-title">New Arrivals</h4>
                <div className="new-arrivals">
                    {newProducts &&
                        newProducts.map((item) => (
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

export default FrontNewArrivals;
