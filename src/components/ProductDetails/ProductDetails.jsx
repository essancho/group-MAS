<<<<<<< HEAD
import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
=======
import React, { useContext, useEffect } from "react";
>>>>>>> cd81ef4b2de49554d9c97e906d42a8394fd834b2
import { productsContext } from "../../contexts/ProductContext";

const ProductDetails = (props) => {
    const { getProductById, productDetails } = useContext(productsContext);
    useEffect(() => {
        getProductById(props.match.params.id);
    }, []);
    console.log(props.match.params.id);
    return (
        <div>
            <div>
                {productDetails[0] && (
                    <div>
                        <p>{productDetails[0].title}</p>
                        <p>${productDetails[0].price}.00</p>
                        <p>{productDetails[0].desc}</p>
                        <img src={productDetails[0].img1} alt="" />
                        <img src={productDetails[0].img2} alt="" />
                    </div>
                )}
            </div>
<<<<<<< HEAD
            <Button to="/edit-product" component={Link}>
                Edit Product
            </Button>
=======
>>>>>>> cd81ef4b2de49554d9c97e906d42a8394fd834b2
        </div>
    );
};

export default ProductDetails;
