import React, { useContext, useRef, useState } from "react";
import { Button, Checkbox, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Snup.css"

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
        <div className="singUpForm">
                <h2>Create a P&Co account</h2>
                <p className="text-center mb-4">Already have an account? <Link to="/login">Sign ip </Link> </p>
                {error && <Alert variant="danger">{error}</Alert>}
                <form  onSubmit={handleSubmit}>
                    <div>
                    <TextField className="inpSign"
                        required
                        id="email"
                        inputRef={emailRef}
                        label="Email"
                        type="email"
                        variant="outlined"
                    />
                    </div>

                   <div>
                    <TextField className="inpSign"
                        required
                        id="password"
                        inputRef={passwordRef}
                        label="Password"
                        type="password"
                        variant="outlined"
                    />

                   <div>
                    <TextField className="inpSign"
                        required
                        id="password"
                        inputRef={passwordConfirmRef}
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                   </div>
                   </div>
                   <div className="checkBLike">
                        <div>
                            <Checkbox className="checkByour">
                            </Checkbox>
                        </div>
                        
                        <div>
                            <p>I’d like to be notified about new products, behined the scenes news and early access to sales.<br/> I can unsubscribe at any time.</p>
                        </div>
                   </div>

                    <Button disabled={loading} className="btnSn w-100" type="submit">
                        Sign Up
                    </Button>
                </form>
                <div className="w-100 text-center mt-2">
                By providing your email address, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions.</a>
                </div>
        </div>
    );
};

export default Signup;
