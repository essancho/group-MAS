import React from "react";
import { InstantSearch } from "react-instantsearch-core";
import algoliasearch from 'algoliasearch'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import AllNewItems from "./components/Collections/AllNewItems/AllNewItems";

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
import AllCollection from "./components/Collections/AllCollection/AllCollection";
import Cart from "./components/Cart/Cart";
import AddressForm from "./components/AddressForm/AddressForm";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Footer from "./components/Footer/Footer";
import AllSaleItems from "./components/Collections/AllSaleItems/AllSaleItems";
import AllGoods from "./components/Collections/AllGoods/AllGoods";

// import { ADMIN_KEY, APP_ID } from "../functions";



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
                        <Route exact path="/all-new" component={AllNewItems} />
                        <Route exact path="/all-sale" component={AllSaleItems}/>
                        <Route exact path="/all-collection" component={AllCollection} />
                        <Route exact path="/goods" component={AllGoods} />
                        <Route exact path="/cart" component={Cart}/>
                        <PrivateRoute exact path="/address-form" component={AddressForm}/>
                        <PrivateRoute exact path="/payment" component={PaymentForm}/> 
                    </Switch>
                    <Footer/>
                </ProductsContextProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routes;
