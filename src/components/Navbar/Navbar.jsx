import { Button, ButtonGroup, IconButton, Typography } from "@material-ui/core";
import { FavoriteBorderOutlined, PersonOutlined, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/pco-logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <div className="nav-menu">
                        <Typography
                            variant="h4"
                            className="logo"
                            to="/"
                            component={Link}
                        >
                            P&Co
                        </Typography>
                    </div>

                    <div>
                        <ul className="category-menu">
                            <Link to="/">
                                <li className="item-men">
                                    Men
                                </li>
                            </Link> 

                            <Link to="/">
                                <li className="item-woman">
                                    Women
                                </li>
                            </Link> 

                            <Link to="/">
                                <li className="item-goods">
                                    Goods
                                </li>
                            </Link> 
                        </ul>
                    </div>

                    <div className="nav-icon">
                        <IconButton to="/login" component={Link}>
                            <PersonOutlined />
                        </IconButton>

                        <IconButton>
                            <SearchOutlined />
                        </IconButton>

                        <IconButton>
                            <FavoriteBorderOutlined />
                        </IconButton>
                        
                        <IconButton>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;
