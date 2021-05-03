import React from "react";
import "./Offers.css";
import SaleIcon from "../../assets/img/mainpage/icons/sale-icon.png";
import ShippingIcon from "../../assets/img/mainpage/icons/shipping-icon.png";
import WebIcon from "../../assets/img/mainpage/icons/web-icon.png";
const Offers = () => {
    return (
        <div>
            <>
                <div className="offer-wrapper">
                    <div className="offers-container">
                        <div className="sale-15 offer-box">
                            <img src={SaleIcon} alt="sale-15%" />
                            <span className="offer-title">
                                15% Off First Order
                            </span>
                            <span>
                                Subscribe to our mailing list <br /> for 15% off
                                your first order.
                            </span>
                        </div>
                        <div className="return-30 offer-box">
                            <img src={ShippingIcon} alt="sale-15%" />
                            <span className="offer-title">30 Day Returns</span>
                            <span>
                                Shop with certainty with <br /> a 30 day returns
                                policy.
                            </span>
                        </div>
                        <div className="free-shipping offer-box">
                            <img src={WebIcon} alt="sale-15%" />
                            <span className="offer-title">
                                WorldWide Shipping
                            </span>
                            <span>
                                Free worldwide shipping on <br /> all orders
                                over $65.
                            </span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Offers;
