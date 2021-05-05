import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { productsContext } from "../../contexts/ProductContext";
import { adminUID } from "../../helpers/API";
import "./ProductDetails.css"




const ProductDetails = (props) => {
    const { currentUser } = useAuth();
    const { getProductById, productDetails } = useContext(productsContext);
    useEffect(() => {
        getProductById(props.match.params.id);
    }, []);
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
                    {currentUser && currentUser.uid === adminUID ? (
                        <Link to={`/edit-product/${props.match.params.id}`}>
                            {" "}
                            <button>Edit</button>{" "}
                        </Link>
                    ) : null}
                </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
