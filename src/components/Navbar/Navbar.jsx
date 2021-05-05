import { Button, IconButton, Typography } from "@material-ui/core";
import { Add, Person, PersonOutlined } from "@material-ui/icons";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";
import Badge from "@material-ui/core/Badge";
import { ShoppingCart } from "@material-ui/icons";
import "./Navbar.css";
import { productsContext } from "../../contexts/ProductContext";
import Logo from "../../assets/img/mainpage/PandCo.png"
const Navbar = () => {
    const {cartLength} = useContext(productsContext);
    const { currentUser } = useAuth();
    
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <Link to="/">

                    <img width={120} src={Logo} alt="logo"/>
                    </Link>
                    <div>

                    {currentUser ? (
                        <Button to="/dashboard" component={Link}>
                            <Person color="primary" />
                            {currentUser.email}
                        </Button>
                    ) : (
                        <IconButton to="/login" component={Link}>
                            <Person color="disabled" />
                        </IconButton>
                    )}
                    {currentUser && currentUser.uid === adminUID ? (
                        <Button startIcon={<Add/>} to="/add-product" component={Link}>
                            Add New
                        </Button>
                    ) : null}
                    <Link to="/cart" style={{ color: "inherit" }}>
                            <IconButton
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={cartLength}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </header>
            
        </div>
    );
};

export default Navbar;
