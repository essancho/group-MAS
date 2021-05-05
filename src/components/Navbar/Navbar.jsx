
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";
import {Typography, Button, IconButton} from "@material-ui/core"
import {PersonOutlined, SearchOutlined} from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import "./Navbar.css";
const Navbar = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <div className="navMenu" >
                        <Typography
                            variant="h4"
                            className="logo"
                            to="/"
                            component={Link}
                        >
                            P&Co
                        </Typography>
                        <div className="navMenu">
                        
                        <Typography className="navMenuItems">
                            Men
                        </Typography>
                        <Typography className="navMenuItems">
                            Woman
                        </Typography>
                        <Typography className="navMenuItems">
                            Goods
                        </Typography>
                        </div>
                    </div>

                    <div>
                        {currentUser ? (
                            <Button to="/dashboard" component={Link}>
                                <PersonOutlined />
                                {currentUser.email}
                            </Button>
                            
                        ) : (
                            <IconButton to="/login" component={Link}>
                                <PersonOutlined />
                            </IconButton>
                            )}
                            <IconButton>
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                            {currentUser && currentUser.uid === adminUID ? (
                                <Button to="/add-product" component={Link}>
                                    Add new product
                                </Button>
                        ) : null}
                    </div>
                        
                </div>
            </header>
        </div>
    );
};

export default Navbar;
