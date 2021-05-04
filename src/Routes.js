import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";

import MenCategory from "./components/Collections/MenCategory";
import WomenCategory from "./components/Collections/WomenCollection/WomenCategory";
import Dashboard from "./components/Dashboard/Dashboard";
import EditProduct from "./components/EditProduct/EditProduct";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AdminPrivateRoute from "./components/PrivateRoute/AdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
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
                        <AdminPrivateRoute
                            exact
                            path="/add-product"
                            component={AddNewProduct}
                        />
                        <AdminPrivateRoute
                            exact
                            path="/edit-product/:id"
                            component={EditProduct}
                        />
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
                        <Route path="/details/:id" component={ProductDetails} />
                        <Route
                            path="/forgot-password"
                            component={ForgotPassword}
                        />
                        <Route exact path="/men" component={MenCategory} />
                        <Route
                            exact
                            path="/women-category"
                            component={WomenCategory}
                        />
                    </Switch>
                </ProductsContextProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routes;
