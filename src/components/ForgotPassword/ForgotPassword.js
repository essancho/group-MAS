import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const ForgotPassword = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const emailRef = useRef();

    const { resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions");
        } catch {
            setError("Failed to reset password");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <>
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    inputRef={emailRef}
                    required
                />
                <Button disabled={loading} className="w-100" type="submit">
                    Reset Password
                </Button>
            </form>
            <div className="w-100 text-center mt-3">
                <Link to="/login">Log In</Link>
            </div>

            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>{" "}
            </div>
        </>
    );
};

export default ForgotPassword;
