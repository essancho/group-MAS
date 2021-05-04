import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import "../MenAllProducts/MenAllProducts.css";
import MenCard from "../MenAllProducts/MenCard";
const MenShirtLimit = () => {
    const { menShirt, getMenShirtCollection } = useContext(productsContext);
    useEffect(() => {
        getMenShirtCollection();
    }, []);

    return (
        <div className="men-wrapper">
            <Container>
                <h4 className="men-title">Shirting</h4>
                <div className="men-all">
                    {menShirt &&
                        menShirt.map((item) => (
                            <MenCard key={item.id} id={item.id} item={item} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default MenShirtLimit;
