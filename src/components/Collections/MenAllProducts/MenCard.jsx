import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productsContext } from "../../../contexts/ProductContext";
import { adminUID } from "../../../helpers/API";
import "./MenCard.css";
const MenCard = (props) => {
    const [hover, setHover] = useState(false);
    const { deleteProduct } = useContext(productsContext);
    const { currentUser } = useAuth();
    return (
        <div
            className="front-cards"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {props.item.category === "new" ? (
                <div className="new">
                    <span>NEW</span>
                </div>
            ) : (
                <div className="sale">
                    <span>20% OFF</span>
                </div>
            )}
            <Link to={`/details/${props.item.id}`}>
                {hover ? (
                    <img src={props.item.img2} alt="img-hover-1" />
                ) : (
                    <img src={props.item.img1} alt="img-hover-2" />
                )}
            </Link>
            <br />
            <span className="cards-title">{props.item.title}</span> <br />
            {props.item.category === "sale" ? (
                <div>
                    <span className="cards-price cards-price-sale">
                        ${props.item.price}.00
                    </span>
                    <span className="cards-price cards-price-saled">
                        ${Math.ceil((props.item.price / 5) * 4)}.00
                    </span>
                </div>
            ) : (
                <span className="cards-price">${props.item.price}.00</span>
            )}
            {currentUser && currentUser.uid === adminUID ? (
                <IconButton onClick={() => deleteProduct(props.item.id)}>
                    <Delete />
                </IconButton>
            ) : null}
        </div>
    );
};

export default MenCard;
