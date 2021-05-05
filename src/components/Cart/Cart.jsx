import { Button, CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";

import { calcTotalPrice } from "../../helpers/calcPrice";
import "./Cart.css";

const Cart = () => {
    const { getCart, cart, changeProductCount } = useContext(productsContext);

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div className="cart">
            {cart.products ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>SubPrice</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map((elem) => (
                                <tr key={elem.item.id}>
                                    <td>
                                        <img
                                            width={120}
                                            src={elem.item.img1}
                                            alt="cart-img"
                                        />
                                    </td>
                                    <td>{elem.item.title} <br/><button>Remove</button> </td>
                                    <td>{elem.item.price}</td>
                                    <td>
                                        <input
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
                                    <td>{elem.subPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4>Total: {calcTotalPrice(cart.products)}</h4>
                    <Link to="/address-form">
                    <Button variant="contained" color="primary">
                        CHECKOUT
                    </Button>
                    
                    </Link>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Cart;
