import { Button } from "@material-ui/core";
import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";




const ProductDetails = (props) => {
    const classes = useStyles();
    const { getProductById, productDetails } = useContext(productsContext);
    useEffect(() => {
        getProductById(props.match.params.id);
    }, []);
    console.log(props.match.params.id);
    return (
        <div>
                {productDetails[0] && (
                    <div className={classes.productDetail}>
                        <div className={classes.productDeskAll}>
                            <div>
                                <p>{productDetails[0].title}</p>
                            </div>

                            <div>
                                <p>${productDetails[0].price}</p>
                            </div>

                            <div className={classes.productDesk}>
                                <p>{productDetails[0].desc}</p>
                            </div>
                        </div> 
                    
                        <div className={classes.detailsImg}>
                            <img src={productDetails[0].img1} alt="" />
                            <img src={productDetails[0].img2} alt="" />
                        </div>
                    </div>
                )}
            <Button></Button>
            <Link to={`/edit-product/${props.match.params.id}`}>Edit</Link>
        </div>
    );
};

export default ProductDetails;
