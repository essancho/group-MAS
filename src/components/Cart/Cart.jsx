import { Button, ButtonGroup, CircularProgress, Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";

import { calcTotalPrice } from "../../helpers/calcPrice";
import "./Cart.css";

const Cart = () => {
    const { getCart, cart, changeProductCount, removeProductsFromCart } = useContext(productsContext);
    const history = useHistory();
    useEffect(() => {
        getCart();
    }, []);

    return (
        <Container>
            <h3 style={{textAlign: "center"}}>CART</h3>
        <div className="cart">
            {cart.products ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map((elem) => (
                                <tr key={elem.item.id}>
                                    <td>
                                        <img
                                            width={100}
                                            src={elem.item.img1}
                                            alt="cart-img"
                                        />
                                        <img
                                            width={100}
                                            src={elem.item.img2}
                                            alt="cart-img"
                                        />
                                    </td>
                                    <td>{elem.item.title} <br/></td>
                                    <td>${elem.item.price}.00</td>
                                    <td>
                                        <input
                                            style={{width: "50px"}}
                                            min={1}
                                            onChange={(e) =>
                                                changeProductCount(
                                                    e.target.value,
                                                    elem.item.id
                                                )
                                            }
                                            type="number"
                                            value={elem.count}
                                        />
                                    </td>
                                    <td>${elem.subPrice}.00</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="btn-total">
                        <h4 className="total">Total: ${calcTotalPrice(cart.products)}.00</h4>
                            

                        <Link to="/address-form">
                        <Button variant="contained" color="primary">
                            CHECKOUT
                        </Button>
                        <Button onClick={() => {
                            history.goBack();
                        }} variant="contained" color="action">
                            CONTINUE SHOPPING
                        </Button>
                    </Link>
                            

                    </div>
                    
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
        </Container>
    );
};

export default Cart;
