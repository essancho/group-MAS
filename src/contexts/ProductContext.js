import React, { useReducer } from "react";
import { db } from "../components/firebase/firebase";
import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductsInCart,
} from "../helpers/calcPrice";
export const productsContext = React.createContext();
const INIT_STATE = {
    menProducts: [],
    newProducts: [],
    saleProducts: [],
    allProducts: [],
    womenProducts: [],
    productDetails: [],
    menTshirt: [],
    menShirt: [],
    menPants: [],
    menOW: [],
    womenTshirt: [],
    womenShirt: [],
    womenPants: [],
    womenOW: [],
    cart: [],
    cartLength: getCountProductsInCart(),
    goodsProducts: []
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
        case "GET_SALE_PRODUCTS":
            return { ...state, saleProducts: action.payload };
        case "GET_PRODUCT_BY_ID":
            return { ...state, productDetails: action.payload };
        case "GET_MEN_TSHIRT_PRODUCTS":
            return { ...state, menTshirt: action.payload };
        case "GET_MEN_SHIRT_PRODUCTS":
            return { ...state, menShirt: action.payload };
        case "GET_MEN_PANTS_PRODUCTS":
            return { ...state, menPants: action.payload };
        case "GET_MEN_OW_PRODUCTS":
            return { ...state, menOW: action.payload };
        case "GET_WOMEN_TSHIRT_PRODUCTS":
            return { ...state, womenTshirt: action.payload };
        case "GET_WOMEN_SHIRT_PRODUCTS":
            return { ...state, womenShirt: action.payload };
        case "GET_WOMEN_PANTS_PRODUCTS":
            return { ...state, womenPants: action.payload };
        case "GET_WOMEN_OW_PRODUCTS":
            return { ...state, womenOW: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload };
            case "GET_GOODS_PRODUCTS":
            return { ...state, goodsProducts: action.payload };
            case "CHANGE_COUNT" : return {...state, cartLength: action.payload};

        default:
            return state;
    }
};
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    let collection = db.collection("products");
    let orders = db.collection("orders");

    async function getCollection(limit) {
        let arr = [];
        await collection
        
        .limit(limit).get().then((snapshot) => {
            snapshot.docs.map((item) => {
                return arr.push(item.data());
            });
        });

        dispatch({
            type: "GET_ALL_PRODUCTS",
            payload: arr,
        });
    }
    async function getSaleCollection(limit) {
        let arr = [];

        await collection
            .where("category", "==", "sale")
            .orderBy("createdAt", "desc")
            .limit(limit)
            .get()
            .then((snapshot) => {
                snapshot.docs.map((item) => {
                    return arr.push(item.data());
                });
            });

        dispatch({
            type: "GET_SALE_PRODUCTS",
            payload: arr,
        });
    }

    async function getNewCollection(limit) {
        let arr = [];

        await collection
            .where("category", "==", "new")
            .orderBy("createdAt", "desc")
            .limit(limit)
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

    async function getMenCollection(limit) {
        let menCollection = collection.where("gender", "==", "men");
        let arr = [];
        let data = await menCollection.limit(limit).get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_PRODUCTS",
            payload: arr,
        });
    }
    async function getGoodsCollection(limit) {
        let typeCollection = collection.where("type", "==", "goods");
        let arr = [];
        let data = await typeCollection.limit(limit).get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_GOODS_PRODUCTS",
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
            .then(() => {});
        getCollection();
        
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

    async function updateProduct(id, obj) {
        await collection.doc(id).update(obj);
        getCollection();
    }

    async function getMenTshirtCollection(limit) {
        let menCollection = collection.where("gender", "==", "men");
        let menTshirtCollection = menCollection
            .where("type", "==", "tshirt")
            .limit(limit);
        let arr = [];
        let data = await menTshirtCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_TSHIRT_PRODUCTS",
            payload: arr,
        });
    }
    async function getMenShirtCollection(limit) {
        let menCollection = collection.where("gender", "==", "men");
        let menShirtCollection = menCollection
            .where("type", "==", "shirt")
            .limit(limit);
        let arr = [];
        let data = await menShirtCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_SHIRT_PRODUCTS",
            payload: arr,
        });
    }
    async function getMenPantsCollection(limit) {
        let menCollection = collection.where("gender", "==", "men");
        let menTypeCollection = menCollection
            .where("type", "==", "pants")
            .limit(limit);
        let arr = [];
        let data = await menTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_PANTS_PRODUCTS",
            payload: arr,
        });
    }
    async function getMenOWCollection(limit) {
        let menCollection = collection.where("gender", "==", "men");
        let menTypeCollection = menCollection
            .where("type", "==", "outerwear")
            .limit(limit);
        let arr = [];
        let data = await menTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_MEN_OW_PRODUCTS",
            payload: arr,
        });
    }
    async function getWomenTshirtCollection(limit) {
        let genderCollection = collection.where("gender", "==", "women");
        let genderTypeCollection = genderCollection
            .where("type", "==", "tshirt")
            .limit(limit);
        let arr = [];
        let data = await genderTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_WOMEN_TSHIRT_PRODUCTS",
            payload: arr,
        });
    }
    async function getWomenShirtCollection(limit) {
        let genderCollection = collection.where("gender", "==", "women");
        let genderTypeCollection = genderCollection
            .where("type", "==", "shirt")
            .limit(limit);
        let arr = [];
        let data = await genderTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_WOMEN_SHIRT_PRODUCTS",
            payload: arr,
        });
    }
    async function getWomenPantsCollection(limit) {
        let genderCollection = collection.where("gender", "==", "women");
        let genderTypeCollection = genderCollection
            .where("type", "==", "pants")
            .limit(limit);
        let arr = [];
        let data = await genderTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_WOMEN_PANTS_PRODUCTS",
            payload: arr,
        });
    }
    async function getWomenOWCollection(limit) {
        let genderCollection = collection.where("gender", "==", "women");
        let genderTypeCollection = genderCollection
            .where("type", "==", "outerwear")
            .limit(limit);
        let arr = [];
        let data = await genderTypeCollection.get();
        data.docs.map((item) => {
            return arr.push(item.data());
        });
        dispatch({
            type: "GET_WOMEN_OW_PRODUCTS",
            payload: arr,
        });
    }
    
    // -------------CART --------------------

    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredCart = cart.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredCart.length > 0) {
            cart.products = cart.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            cart.products.push(newProduct);
        }

        newProduct.subPrice = calcSubPrice(newProduct);
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length,
        });
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }
    function cleanCart() {
        localStorage.removeItem('cart');
    }

    function changeProductCount(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = cart.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newCart = cart.products.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
    }

    async function removeAllProductsFromCart() {
        await localStorage.removeItem('cart')
        await dispatch({
            type: "CHANGE_COUNT",
            payload: null
        })
    }

    // --------------- VALUES -------------------------------

    

    const value = {
        cart: state.cart,
        cartLength: state.cartLength,
        productDetails: state.productDetails,
        allProducts: state.allProducts,
        womenProducts: state.womenProducts,
        menProducts: state.menProducts,
        newProducts: state.newProducts,
        saleProducts: state.saleProducts,
        menTshirt: state.menTshirt,
        menShirt: state.menShirt,
        menPants: state.menPants,
        menOW: state.menOW,
        womenTshirt: state.womenTshirt,
        womenShirt: state.womenShirt,
        womenPants: state.womenPants,
        womenOW: state.womenOW,
        goodsProducts: state.goodsProducts,
        removeAllProductsFromCart,
        getGoodsCollection,
        cleanCart,
        addProductToCart,
        getCart,
        changeProductCount,
        checkProductInCart,
        getWomenTshirtCollection,
        getWomenShirtCollection,
        getWomenPantsCollection,
        getWomenOWCollection,
        getMenOWCollection,
        getMenPantsCollection,
        getMenShirtCollection,
        getMenTshirtCollection,
        getSaleCollection,
        updateProduct,
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
