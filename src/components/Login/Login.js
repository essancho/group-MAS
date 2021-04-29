import React, { useContext, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
const Login = () => {
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
            history.push("/dashboard");
        } catch {
            setError("Failed to sign in");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <>
            <h2 className="">Log In</h2>

            {error && <Alert>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="email"
                    inputRef={emailRef}
                    label="Email"
                    type="email"
                />

                <TextField
                    required
                    id="password"
                    inputRef={passwordRef}
                    label="Password"
                    type="password"
                />
                <button disabled={loading} type="submit">
                    Log In
                </button>
            </form>
            <div className="w-100 text-center mt-3">
                <Button to="/forgot-password" component={Link}>
                    Forgot Password?
                </Button>
            </div>

            <div className="w-100 text-center mt-2">
                Need an account?{" "}
                <Button to="/signup" component={Link}>
                    Sign Up
                </Button>{" "}
            </div>
        </>
    );
};

export default Login;
