import { Button, Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import MenCard from "../MenAllProducts/MenCard";
import WomenCover from "../WomenCollection/WomenCover";
const AllNewItems = () => {
    const { newProducts, getNewCollection } = useContext(productsContext);
    const [itemLimit, setItemLimit] = useState(6);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getNewCollection(itemLimit);
    }, [itemLimit]);
    function changeLimit() {
        setItemLimit(itemLimit + 6);
        if (itemLimit >= 18) {
            setLoading(true);
            return;
        }
    }
    let category = "All New Collection"
    return (
        <>

        <WomenCover category={category}/>
        
        <Container>
            <h4 style={{ textAlign: "center" }}>All New Clothing</h4>
            <div
                className="all-flex"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {newProducts &&
                    newProducts.map((item) => (
                        <MenCard key={item.id} id={item.id} item={item} />
                    ))}
            </div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>

                <Button
                    variant="contained"
                    disabled={loading}
                    onClick={() => changeLimit()}
                >
                    Show More
                </Button>
            </div>
        </Container>
        </>
    );
};

export default AllNewItems;
