import React, { useContext, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const UpdateProfile = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords Do Not Match");
        }

        const promises = [];
        setLoading(true);
        setError("");
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises)
            .then(() => {
                history.push("./");
            })
            .catch(() => {
                setError("Failed to update account");
            })
            .finally(() => {
                setLoading(false);
            });

        setLoading(false);
    }

    return (
        <>
            <h2 className="text-center mb-4">Update Profile</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="email"
                    type="email"
                    inputRef={emailRef}
                    defaultValue={currentUser.email}
                />
                <TextField
                    required
                    id="password"
                    type="password"
                    inputRef={passwordRef}
                    placeholder="Leave blank to keep the same"
                />
                <TextField
                    required
                    id="password-confirm"
                    type="password"
                    inputRef={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                />

                <Button disabled={loading} className="w-100" type="submit">
                    Update
                </Button>
            </form>

            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    );
};

export default UpdateProfile;
