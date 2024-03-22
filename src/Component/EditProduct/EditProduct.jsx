/* eslint-disable react/jsx-key */
import axios from "axios";
import Css from "./EditProduct.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {

    const naviagte = useNavigate()
    const url = "http://localhost:3000/Products/";
    const [product, setProduct] = useState({
        Name: "rohan",
        Description: "",
        Weight: "",
        Category: "",
        Sizes: "",
        File: "", 
        FacebookHandle: "",
        ShoppifyHandle: "",
        InstagramAccount: "",
        Price: "",
        Currency: "",
        SKU: "",
        Tags: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data[9]);
            setProduct({ ...product, Name: response.data[9].Name, Description: response.data[9].Description, Weight: response.data[9].Weight, Category: response.data[9].Category, Sizes: response.data[9].Sizes, ShoppifyHandle: response.data[9].ShoppifyHandle, FacebookHandle: response.data[9].FacebookHandle, InstagramAccount: response.data[9].InstagramAccount, Price: response.data[9].Price, SKU: response.data[9].SKU, Currency: response.data[9], Tags: response.data[9].Tags , File: response.data[9].File})
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const id = "c451";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(url + id, product);
            console.log("Product updated successfully!");
            alert("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product: ", error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // For file inputs, use the files property
        const newValue = type === 'file' ? e.target.files[0] : value;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: newValue,
        }));
    };



    return (
        <>
            <div className={Css.AddProductWrapper}>
                <div className={Css.Title}>
                    <h1>Make the changes below</h1>
                    <h3>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play</h3>
                </div>
                <div className={Css.info}>
                    <form className={Css.Form} onSubmit={handleSubmit}>
                        <div className={Css.RenderDiv}>
                            <div className={Css.block1}>
                                <div className={Css.Media}>
                                    <h3>Media</h3>
                                    <label>Product images</label>
                                    <input
                                        type="file"
                                        name="File"
                                        value={product.File}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className={Css.ProductInfo}>
                                    <div className={Css.ProductTitle}>
                                        <h3>Product Information</h3>
                                    </div>
                                    <div className={Css.sectionMain}>
                                        <div className={Css.section1}>
                                            <input
                                                name="Name"
                                                type="text"
                                                value={product.Name}
                                                placeholder="Name"
                                                onChange={handleChange}
                                            ></input>
                                            <div className={Css.Description}>
                                                <label>Description</label>
                                                <textarea
                                                    name="Description"
                                                    value={product.Description}
                                                    placeholder="Description"
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className={Css.section2}>
                                            <input
                                                type="number"
                                                name="Weight"
                                                value={product.Weight}
                                                placeholder="Weight"
                                                onChange={handleChange}
                                            ></input>
                                            <div className={Css.Category}>
                                                <label>Category</label>
                                                <select
                                                    value={product.Category}
                                                    name="Category"
                                                    onChange={handleChange}
                                                >
                                                    <option value={"Not_Set"}>Select_option</option>
                                                    <option value={"clothing"}>clothing</option>
                                                    <option value={"electronics"}>electronics</option>
                                                    <option value={"Furnitureg"}>Furniture</option>
                                                    <option value={"others"}>others</option>
                                                    <option value={"Real Estate"}>Real Estate</option>
                                                </select>
                                            </div>
                                            <div className={Css.Sizes}>
                                                <label>Sizes</label>
                                                <select
                                                    value={product.Sizes}
                                                    name="Sizes"
                                                    onChange={handleChange}
                                                >
                                                    <option value={"Not_Set"}>Select_option</option>
                                                    <option value={"Extra small"}>Extra small</option>
                                                    <option value={"Extra largt"}>Extra large</option>
                                                    <option value={"Large"}>Large</option>
                                                    <option value={"Medium"}>Medium</option>
                                                    <option value={"Small"}>Small</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Css.block2}>
                                <div className={Css.Social}>
                                    <h3>Social</h3>
                                    <input
                                        name="FacebookHandle"
                                        type="text"
                                        value={product.FacebookHandle}
                                        placeholder="FacebookHandle"
                                        onChange={handleChange}
                                    ></input>{" "}
                                    <input
                                        name="ShoppifyHandle"
                                        type="text"
                                        value={product.ShoppifyHandle}
                                        placeholder="ShoppifyHandle"
                                        onChange={handleChange}
                                    ></input>{" "}
                                    <input
                                        name="InstagramAccount"
                                        type="text"
                                        value={product.InstagramAccount}
                                        placeholder="InstagramAccount"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className={Css.Price}>
                                    <div className={Css.priceWrapper}>
                                        <h3>Pricing</h3>
                                        <div className={Css.Pricing}>
                                            <input
                                                name="Price"
                                                type="number"
                                                value={product.Price}
                                                placeholder="Price"
                                                onChange={handleChange}
                                            ></input>
                                            <select value={product.Currency} name="Currency" onChange={handleChange}>
                                                <option value={"Not selected"}>select option</option>
                                                <option value={"USD"}>USD</option>
                                                <option value={"BTC"}>BTC</option>
                                                <option value={"CNY"}>CNY</option>
                                                <option value={"EUR"}>EUR</option>
                                                <option value={"GBP"}>GBP</option>
                                                <option value={"INR"}>INR</option>
                                            </select>
                                            <input
                                                name="SKU"
                                                type="text"
                                                value={product.SKU}
                                                placeholder="SKU"
                                                onChange={handleChange}
                                            ></input>
                                        </div>
                                        <div className={Css.Tags}>
                                            <label>Tags</label>
                                            <select value={product.Tags} name="Tags" onChange={handleChange}>
                                                <option value={"Not selected"}>select option</option>
                                                <option value={"In Stock"}>In Stock</option>
                                                <option value={"Black Friday"}>Black Friday</option>
                                                <option value={"Sale"}>Sale</option>
                                                <option value={"Out of Stock"}>Out of Stock</option>
                                                <option value={"Expired"}>Expired</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Css.btns}>
                            <button className={Css.btn} type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Products;
