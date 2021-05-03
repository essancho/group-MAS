import React, { useReducer } from "react";
import { db } from "../components/firebase/firebase";

export const productsContext = React.createContext();
const INIT_STATE = {
    menProducts: [],
    newProducts: [],
    allProducts: [],
    womenProducts: [],
    productDetails: [],
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return { ...state, allProducts: action.payload };
        case "GET_MEN_PRODUCTS":
            return { ...state, menProducts: action.payload };
        case "GET_WOMEN_PRODUCTS":
            return { ...state, womenProducts: action.payload };
        case "GET_NEW_PRODUCTS":
            return { ...state, newProducts: action.payload };
        case "GET_PRODUCT_BY_ID":
            return { ...state, productDetails: action.payload };

        default:
            return state;
    }
};
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    let collection = db.collection("products");

    async function getCollection() {
        let arr = [];
        await collection.get().then((snapshot) => {
            snapshot.docs.map((item) => {
                return arr.push(item.data());
            });
        });

        dispatch({
            type: "GET_ALL_PRODUCTS",
            payload: arr,
        });
    }
    async function getNewCollection() {
        let arr = [];

        await collection
            .where("category", "==", "new")
            .orderBy("createdAt", "desc")
            .limit(6)
            .get()
            .then((snapshot) => {
                snapshot.docs.map((item) => {
                    return arr.push(item.data());
                });
            });

        dispatch({
            type: "GET_NEW_PRODUCTS",
            payload: arr,
        });
    }

    async function getMenCollection() {
        let menCollection = collection.where("gender", "==", "men");
        let arr = [];
        let data = await menCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_PRODUCTS",
            payload: arr,
        });
    }

    async function getWomenCollection() {
        let womenCollection = collection.where("gender", "==", "women");
        let arr = [];
        let data = await womenCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_WOMEN_PRODUCTS",
            payload: arr,
        });
    }
    async function addProduct(product) {
        await collection.add(product).then((docRef) => {
            collection.doc(docRef.id).update({
                id: docRef.id,
            });
        });
        getCollection();
    }
    async function deleteProduct(id) {
        await collection
            .doc(id)
            .delete()
            .then(() => {
                console.log(id);
            });
        getNewCollection();
    }

    async function getProductById(id) {
        let arr2 = [];
        let data = collection.doc(id);
        await data.get().then((doc) => {
            arr2.push(doc.data());
        });
        console.log(arr2[0]);
        dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: arr2,
        });
    }

    const value = {
        productDetails: state.productDetails,
        allProducts: state.allProducts,
        womenProducts: state.womenProducts,
        menProducts: state.menProducts,
        newProducts: state.newProducts,
        deleteProduct,
        getCollection,
        getNewCollection,
        getWomenCollection,
        getMenCollection,
        addProduct,
        getProductById,
    };
    return (
        <productsContext.Provider value={value}>
            {children}
        </productsContext.Provider>
    );
};
export default ProductsContextProvider;
