import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../components/firebase/firebase";
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    let userCollection = db.collection("users");
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function addUser(user) {
        await userCollection.add(user);
    }
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged((user) => {
            if (!currentUser) {
                setLoading(false)
                return;
            }
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubsribe;
    }, []);

    const value = {
        currentUser,
        addUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
