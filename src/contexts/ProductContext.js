import axios from "axios";
import React, { useReducer } from "react";

import { JSON_API } from "../helpers/API";

export const productsContext = React.createContext();
const INIT_STATE = {};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {};

        default:
            return state;
    }
};
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    function getProducts() {
        let res = axios(JSON_API);
        console.log(res);
    }
    const value = {
        getProducts,
    };
    return (
        <productsContext.Provider value={value}>
            {children}
        </productsContext.Provider>
    );
};
export default ProductsContextProvider;
