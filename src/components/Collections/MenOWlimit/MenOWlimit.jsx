import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";

const MenOWlimit = () => {
    const { menOW, getMenOWCollection } = useContext(productsContext);
    useEffect(() => {
        getMenOWCollection();
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">Outer Wear</h4>
                <div className="men-all">
                    {menOW &&
                        menOW.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default MenOWlimit;
