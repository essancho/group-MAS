import React, { useContext, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Signup = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords Do Not Match");
        }
        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard");
        } catch {
            setError("Failed to create an account");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div>
            <h2 className="text-center mb-4">Sign Up</h2>

            {error && <Alert variant="danger">{error}</Alert>}
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
                <TextField
                    required
                    id="password"
                    inputRef={passwordConfirmRef}
                    label="Password"
                    type="password"
                />

                <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
                </Button>
            </form>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
    );
};

export default Signup;
