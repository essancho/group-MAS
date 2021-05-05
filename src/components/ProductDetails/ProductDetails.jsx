import { Button } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { productsContext } from "../../contexts/ProductContext";
import { adminUID } from "../../helpers/API";

const ProductDetails = (props) => {
    const { currentUser } = useAuth();
    const { getProductById, productDetails, addProductToCart, checkProductInCart } = useContext(productsContext);
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
                        {productDetails[0].category === "sale" ? (
                            <div>
                                <span>${productDetails[0].price}.00 </span>
                                <span className="cards-price cards-price-saled">
                                    $
                                    {Math.ceil(
                                        (productDetails[0].price / 5) * 4
                                    )}
                                    .00
                                </span>
                            </div>
                        ) : (
                            <p>${productDetails[0].price}.00</p>
                        )}
                        <p>{productDetails[0].desc}</p>
                        <img src={productDetails[0].img1} alt="" />
                        <img src={productDetails[0].img2} alt="" />
                    </div>
                )}
            </div>
            <Button variant="contained" color={
                        checkProductInCart(productDetails[0] && productDetails[0].id) ? "secondary" : "primary"
                    } onClick={() => addProductToCart(productDetails[0])}>Add to cart</Button>
            
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
