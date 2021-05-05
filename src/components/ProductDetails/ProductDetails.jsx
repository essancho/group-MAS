
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Delete, Edit, ShoppingBasket } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { productsContext } from "../../contexts/ProductContext";
import { adminUID } from "../../helpers/API";
import "./ProductDetails.css"




const ProductDetails = (props) => {
    const history = useHistory();
    const { currentUser } = useAuth();
    const { getProductById, productDetails, addProductToCart, checkProductInCart, deleteProduct } = useContext(productsContext);
    useEffect(() => {
        getProductById(props.match.params.id);
    }, []);

    async function deleteProductById() {
         await deleteProduct(props.match.params.id);
         history.push("/");
    }
    
    console.log(props.match.params.id);
    return (
        <div>
            {productDetails[0] && (
                <div className="container">
                    <div className="left">
                        <img src={productDetails[0].img1} alt=""/>
                        <img src={productDetails[0].img2} alt=""/>
                    </div>
                    <div className="center_img">
                        <img src={productDetails[0].img1} alt="" />
                        <img src={productDetails[0].img2} alt="" />
                    </div>


                <div className="right">
                    <p className="productTitle">{productDetails[0].title}</p>
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
                        <p className="productPrice">${productDetails[0].price}.00</p>
                    )}
                    <p className="productDesc">{productDetails[0].desc}</p>
                    {currentUser && currentUser ? (
                        <Button variant="contained" color={checkProductInCart(productDetails[0].id) ? "secondary" : "primary"} onClick={() => addProductToCart(productDetails[0])}>
                            Add to Cart
                        </Button>
                    ) : (
                        <Button to="/login" component={Link}>
                            Log In
                        </Button>
                    )}
                    {currentUser && currentUser.uid === adminUID ? (
                        <>
                        
                        <Link to={`/edit-product/${props.match.params.id}`}>
                            {" "}
                            <IconButton>
                                <Edit/>
                            </IconButton>
                            {" "}
                        </Link>
                            <IconButton onClick={() => deleteProductById()}>
                                <Delete/>
                            </IconButton>
                        </>
                    ) : null}
                </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
