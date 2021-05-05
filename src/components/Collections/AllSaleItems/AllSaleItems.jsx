import { Button, Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../../contexts/ProductContext";
import MenCard from "../MenAllProducts/MenCard";
import WomenCover from "../WomenCollection/WomenCover";
const AllSaleItems = () => {
    const { saleProducts, getSaleCollection } = useContext(productsContext);
    const [itemLimit, setItemLimit] = useState(6);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getSaleCollection(itemLimit);
    }, [itemLimit]);
    function changeLimit() {
        setItemLimit(itemLimit + 6);
        if (itemLimit >= 18) {
            setLoading(true);
            return;
        }
    }
    let category = "All Sale Collection"
    return (
        <>

        <WomenCover category={category}/>
        
        <Container>
            
            <div
                className="all-flex"
                style={{
                    marginTop: "50px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {saleProducts &&
                    saleProducts.map((item) => (
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

export default AllSaleItems;
