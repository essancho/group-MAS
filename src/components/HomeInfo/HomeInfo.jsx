import React, { useEffect, useState } from "react";
import axios from "axios";
import { JSON_API } from "../../helpers/API";
const HomeInfo = () => {
    let [products, setProducts] = useState();
    async function getTest() {
        let { data } = await axios(JSON_API);
        setProducts(data);
    }
    useEffect(() => {
        getTest();
    }, []);
    console.log(products);
    return (
        <div>
            {products ? (
                products[0].men.map((item) => (
                    <>
                        <p>{item.title}</p>
                        <img src={item.img1} alt="img1" />
                        <img src={item.img2} alt="img2" />
                        <p>{item.price}</p>
                    </>
                ))
            ) : (
                <h1>loading</h1>
            )}
        </div>
    );
};

export default HomeInfo;
