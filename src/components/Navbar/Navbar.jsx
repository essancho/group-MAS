import { Button, ButtonGroup, IconButton, Typography } from "@material-ui/core";
import { PersonOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/pco-logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <Typography
                        variant="h5"
                        className="logo"
                        to="/"
                        component={Link}
                    >
                        P&Co
                    </Typography>
                    <IconButton to="/login" component={Link}>
                        <PersonOutlined />
                    </IconButton>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
