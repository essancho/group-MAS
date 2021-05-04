
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";
import {Typography, Button, IconButton} from "@material-ui/core"
import {PersonOutlined} from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import "./Navbar.css";
const Navbar = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <Typography
                        variant="h4"
                        className="logo"
                        to="/"
                        component={Link}
                    >
                        P&Co
                    </Typography>
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
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    {currentUser && currentUser.uid === adminUID ? (
                        <Button to="/add-product" component={Link}>
                            Add new product
                        </Button>
                    ) : null}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
