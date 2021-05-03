import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { productsContext } from "../../contexts/ProductContext";
import { adminUID } from "../../helpers/API";
import "./FrontNewCards.css";
const FrontNewCards = (props) => {
    const [hover, setHover] = useState(false);
    const { deleteProduct } = useContext(productsContext);
    const { currentUser } = useAuth();

    return (
        <div
            className="front-cards"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="new">
                <span>NEW</span>
            </div>
            <Link to={`/details/${props.item.id}`}>
                {hover ? (
                    <img src={props.item.img2} alt="img-hover-1" />
                ) : (
                    <img src={props.item.img1} alt="img-hover-2" />
                )}
            </Link>
            <br />
            <span className="cards-title">{props.item.title}</span> <br />
            <span className="cards-price">${props.item.price}.00</span>
            {currentUser && currentUser.uid === adminUID ? (
                <IconButton onClick={() => deleteProduct(props.item.id)}>
                    <Delete />
                </IconButton>
            ) : null}
        </div>
    );
};

export default FrontNewCards;
