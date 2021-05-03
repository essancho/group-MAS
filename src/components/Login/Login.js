import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loginTitleSN: {
        fontFamily: "moret",
        fontSize: "26px",
        borderRadius: "0px",
    },
}));

const Login = () => {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            console.log(emailRef.current.value, passwordRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to sign in");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div className="loginForm-container">
            <div className="loginForm">
                <h3 className={classes.loginTitleSN}>
                    Sign in to your P&Co account
                </h3>
                <p>
                    Don't have an account?<Link to="/signup">Sign Up</Link>
                </p>
                <p>
                    Any order placed before 28th October 2020 can be accessed{" "}
                    <a href="/">here</a>. If you can't login with your details
                    <br />
                    you may have registered on our rest of world store but you
                    can <a href="/signup">register</a> on this store with the
                    same
                    <br /> details.
                </p>
                <form onSubmit={handleSubmit}>
                    {error && <Alert severity="error">{error}</Alert>}
                    <div>
                        <TextField
                            className="inpLog"
                            required
                            id="email"
                            inputRef={emailRef}
                            label="Email"
                            type="email"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            className="inpLog"
                            required
                            id="password"
                            inputRef={passwordRef}
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                    </div>
                    <button className="btnLog" disabled={loading} type="submit">
                        Log In
                    </button>
                </form>
                <div className="w-400 text-center mt-2">
                    <Button size="small" to="/forgot-password" component={Link}>
                        Can't remember your password?
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
