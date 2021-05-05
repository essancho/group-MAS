import { TextField } from "@material-ui/core";
import React, { useContext, useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./EditProduct.css";
const EditProduct = (props) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { getProductById, productDetails } = useContext(productsContext);
    const [localProducts, setLocalProducts] = useState();
    const [localP, setLocalP] = useState({});
    useEffect(() => {
        getProductById(props.match.params.id);
    }, []);

    useEffect(() => {
        setLocalP(productDetails[0]);
    }, [productDetails]);

    let defaultValue = useRef();
    let defaultValueSec = useRef();
    const { updateProduct } = useContext(productsContext);
    let [product, setProduct] = useState();

    function handleInputs(e) {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value,
        };
        setProduct(newProduct);
        console.log(product);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await updateProduct(props.match.params.id, product);
            history.goBack();
        } catch {
            setError("Failed to Edit Product");
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <div className="edit-wrapper">
            {localP ? (
                <div className="edit-container">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            
                            onChange={handleInputs}
                            label={localP.title}
                            type="text"
                            name="title"
                            id="title-inp"
                        />

                        <FormControl
                            id="new-sale-inp"
                            variant="outlined"
                            margin="dense"
                            
                            size="small"
                            component="fieldset"
                        >
                            <FormLabel component="legend">
                                New or Sale?
                            </FormLabel>
                            <RadioGroup
                                
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
                            
                            onChange={handleInputs}
                            label={localP.price}
                            placeholder="Enter price"
                            type="number"
                            name="price"
                            id="price-inp"
                        />

                        <TextField
                            
                            onChange={handleInputs}
                            label={localP.desc && localP.desc.slice(0, 24)}
                            placeholder="Enter description"
                            type="text"
                            name="desc"
                            id="desc-inp"
                        />

                        <TextField
                            
                            onChange={handleInputs}
                            inputRef={defaultValue}
                            placeholder="Enter URL"
                            type="text"
                            name="img1"
                            id="img1-inp"
                        />

                        <TextField
                            
                            onChange={handleInputs}
                            placeholder="Enter URL"
                            inputRef={defaultValueSec}
                            type="text"
                            name="img2"
                            id="img2-inp"
                        />
                        <div className="add-btns">
                            <button className="add-btnLog" type="submit">
                                Edit Product
                            </button>
                        </div>
                    </form>
                    <Link to="/">Cancel</Link>
                </div>
            ) : (
                <h1>loading</h1>
            )}
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

export default EditProduct;
