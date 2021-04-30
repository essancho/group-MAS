import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from "./components/Signup/Signup";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductContext";

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProductsContextProvider>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />
                        <PrivateRoute
                            path="/update-profile"
                            component={UpdateProfile}
                        />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/forgot-password"
                            component={ForgotPassword}
                        />
                    </Switch>
                </ProductsContextProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routes;
