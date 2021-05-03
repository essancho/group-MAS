
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";
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
