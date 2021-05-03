import { Button, ButtonGroup, TextField } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "./AddNewProduct.css";
const AddNewProduct = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    let defaultValue = useRef();
    let defaultValueSec = useRef();
    const { addProduct } = useContext(productsContext);
    let [product, setProduct] = useState({});
    function handleInputs(e) {
        let newDate = Date.now();

        let newProduct = {
            ...product,
            [e.target.name]: e.target.value,
            id: "",
            createdAt: newDate,
            size: ["xs", "s", "m", "l", "xl"],
        };
        console.log(newProduct);
        setProduct(newProduct);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await addProduct(product);
            history.push("/");
        } catch {
            setError("Failed to Add Product");
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <div className="add-wrapper">
            <div className="add-container">
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        onChange={handleInputs}
                        label="Title"
                        placeholder="Enter title"
                        type="text"
                        name="title"
                        id="title-inp"
                    />
                    <FormControl
                        id="gender-inp"
                        variant="outlined"
                        margin="dense"
                        required={true}
                        size="small"
                        component="fieldset"
                    >
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            required={true}
                            row
                            aria-label="gender"
                            name="gender"
                            onChange={handleInputs}
                        >
                            <FormControlLabel
                                value="women"
                                control={<Radio />}
                                label="Women"
                            />
                            <FormControlLabel
                                value="men"
                                control={<Radio />}
                                label="Men"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl
                        id="type-inp"
                        variant="outlined"
                        margin="dense"
                        required={true}
                        size="small"
                        component="fieldset"
                    >
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup
                            required={true}
                            row
                            aria-label="type"
                            name="type"
                            onChange={handleInputs}
                        >
                            <FormControlLabel
                                value="tshirt"
                                control={<Radio />}
                                label="T Shirt"
                            />
                            <FormControlLabel
                                value="pants"
                                control={<Radio />}
                                label="Pants & Shorts"
                            />
                            <FormControlLabel
                                value="shirt"
                                control={<Radio />}
                                label="Shirts"
                            />
                            <FormControlLabel
                                value="outerwear"
                                control={<Radio />}
                                label="Outerwear"
                            />
                            <FormControlLabel
                                value="goods"
                                control={<Radio />}
                                label="Accessories"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl
                        id="style-inp"
                        variant="outlined"
                        margin="dense"
                        required={true}
                        size="small"
                        component="fieldset"
                    >
                        <FormLabel component="legend">Style</FormLabel>
                        <RadioGroup
                            required={true}
                            row
                            aria-label="style"
                            name="style"
                            onChange={handleInputs}
                        >
                            <FormControlLabel
                                value="Graphic"
                                control={<Radio />}
                                label="Graphic"
                            />
                            <FormControlLabel
                                value="Plain"
                                control={<Radio />}
                                label="Plain"
                            />
                            <FormControlLabel
                                value="Striped"
                                control={<Radio />}
                                label="Striped"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl
                        id="new-sale-inp"
                        variant="outlined"
                        margin="dense"
                        required={true}
                        size="small"
                        component="fieldset"
                    >
                        <FormLabel component="legend">New or Sale?</FormLabel>
                        <RadioGroup
                            required={true}
                            row
                            aria-label="new-sale"
                            name="category"
                            onChange={handleInputs}
                        >
                            <FormControlLabel
                                value="new"
                                control={<Radio />}
                                label="New"
                            />
                            <FormControlLabel
                                value="sale"
                                control={<Radio />}
                                label="Sale"
                            />
                        </RadioGroup>
                    </FormControl>

                    <TextField
                        required
                        onChange={handleInputs}
                        label="Price"
                        placeholder="Enter price"
                        type="number"
                        name="price"
                        id="price-inp"
                    />

                    <TextField
                        required
                        onChange={handleInputs}
                        label="Description"
                        placeholder="Enter description"
                        type="text"
                        name="desc"
                        id="desc-inp"
                    />

                    <TextField
                        required
                        onChange={handleInputs}
                        label="First Picture"
                        inputRef={defaultValue}
                        placeholder="Enter URL"
                        type="text"
                        name="img1"
                        id="img1-inp"
                    />

                    <TextField
                        required
                        onChange={handleInputs}
                        label="Second Picture"
                        placeholder="Enter URL"
                        inputRef={defaultValueSec}
                        type="text"
                        name="img2"
                        id="img2-inp"
                    />
                    <div className="add-btns">
                        <button className="add-btnLog" type="submit">
                            Add New Product
                        </button>
                        <button
                            className="add-btnLog"
                            disabled={loading}
                            to="/"
                            component={Link}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <div className="add-img-container">
                {defaultValue.current ? (
                    <img
                        width={200}
                        src={defaultValue.current.value}
                        alt="add-img-place"
                    />
                ) : (
                    <div></div>
                )}
                {defaultValueSec.current ? (
                    <img
                        width={200}
                        src={defaultValueSec.current.value}
                        alt="add-img-place-2"
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default AddNewProduct;
