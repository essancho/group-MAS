import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ButtonGroup>
                <Button to="/login" component={Link}>
                    Log In
                </Button>
                <Button to="/signup" component={Link}>
                    Sign Up
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Navbar;
