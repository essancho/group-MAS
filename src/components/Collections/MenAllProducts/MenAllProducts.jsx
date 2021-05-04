import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "./MenAllProducts.css";
import MenCard from "./MenCard";
const MenAllProducts = () => {
    const [tshirt, setTshirt] = useState();
    const { menProducts, getMenCollection } = useContext(productsContext);
    useEffect(() => {
        getMenCollection(6);
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">All Men's</h4>
                <div className="men-all">
                    {menProducts &&
                        menProducts.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default MenAllProducts;
