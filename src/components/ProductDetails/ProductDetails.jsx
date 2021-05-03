import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { productsContext } from "../../contexts/ProductContext";
import { adminUID } from "../../helpers/API";

const ProductDetails = (props) => {
    const { currentUser } = useAuth();
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
            {currentUser && currentUser.uid === adminUID ? (
                <Link to={`/edit-product/${props.match.params.id}`}>
                    {" "}
                    <button>Edit</button>{" "}
                </Link>
            ) : null}
        </div>
    );
};

export default ProductDetails;
