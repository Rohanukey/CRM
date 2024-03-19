/* eslint-disable react/jsx-key */
import axios from "axios";
import Css from "./AddProduct.module.css";
import { useEffect, useRef, useState } from "react";

function Products() {

    const url = "http://localhost:3000/Products/"
    const [apidata, setApidata] = useState([])

    useEffect(() => {

        const getdata = async () => {

            try {

                await axios.get(url)
                    .then(response => (setApidata(response.data)))
            }
            catch (err) {
                console.log("Error submitting request" + err.message)
            }

        }
        getdata()
        console.log(apidata)

    }, [])

    const submitdata = async () => {

        try {

            await axios.post(url, inputsRef)
                .then(response => (setApidata(response.data)))
        }
        catch (err) {
            console.log("Error submitting request" + err.message)
        }

    }

    const inputsRef = useRef({
        Name: "",
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

    const onhandleChange = (event) => {
        const { name, value } = event.target;
        inputsRef.current[name] = value;
        console.log(inputsRef)
    };

    const ProductInfo = () => {
        return (
            <div className={Css.ProductInfo}>
                <div className={Css.ProductTitle}>
                    <h3>Product Information</h3>
                </div>
                <div className={Css.sectionMain}>
                    <div className={Css.section1}>
                        <input
                            name="Name"
                            type="text"
                            defaultValue={inputsRef.current.Name}
                            placeholder="Name"
                            onChange={onhandleChange}
                        ></input>
                        <div className={Css.Description}>
                            <label>Description</label>
                            <textarea
                                name="Description"
                                defaultValue={inputsRef.current.Description}
                                placeholder="Description"
                                onChange={onhandleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className={Css.section2}>
                        <input
                            type="number"
                            name="Weight"
                            defaultValue={inputsRef.current.Weight}
                            placeholder="Weight"
                            onChange={onhandleChange}
                        ></input>
                        <div className={Css.Category}>
                            <label>Category</label>
                            <select
                                defaultValue={inputsRef.current.Category}
                                name="Category"
                                onChange={onhandleChange}
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
                                defaultValue={inputsRef.current.Sizes}
                                name="Sizes"
                                onChange={onhandleChange}
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
        );
    };

    const Media = () => {
        return (
            <div className={Css.Media}>
                <h3>Media</h3>
                <label>Product images</label>
                <input
                    type="file"
                    name="File"
                    defaultValue={inputsRef.current.File}
                    onChange={onhandleChange}
                ></input>
            </div>
        );
    };

    const Social = () => {
        return (
            <div className={Css.Social}>
                <h3>Social</h3>
                <input
                    name="FacebookHandle"
                    type="text"
                    defaultValue={inputsRef.current.FacebookHandle}
                    placeholder="FacebookHandle"
                    onChange={onhandleChange}
                ></input>{" "}
                <input
                    name="ShoppifyHandle"
                    type="text"
                    defaultValue={inputsRef.current.ShoppifyHandle}
                    placeholder="ShoppifyHandle"
                    onChange={onhandleChange}
                ></input>{" "}
                <input
                    name="InstagramAccount"
                    type="text"
                    defaultValue={inputsRef.current.InstagramAccount}
                    placeholder="InstagramAccount"
                    onChange={onhandleChange}
                ></input>
            </div>
        );
    };

    const Price = () => {
        return (
            <div className={Css.Price}>
                <div className={Css.priceWrapper}>
                    <h3>Pricing</h3>
                    <div className={Css.Pricing}>
                        <input
                            name="Price"
                            type="number"
                            defaultValue={inputsRef.current.Price}
                            placeholder="Price"
                            onChange={onhandleChange}
                        ></input>
                        <select defaultValue={inputsRef.current.Currency} name="Currency">
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
                            defaultValue={inputsRef.current.SKU}
                            placeholder="SKU"
                            onChange={onhandleChange}
                        ></input>
                    </div>
                    <div className={Css.Tags}>
                        <label>Tags</label>
                        <select defaultValue={inputsRef.current.Tags} name="Tags">
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
        );
    };

    const [currentStep, setCurrentStep] = useState(0);
    const handlePrev = () => {
        setCurrentStep((prevStep) => Math.max(0, prevStep - 1));
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(3, prevStep + 1));
    };

    const handleSubmit = () => {
        // Handle form submission
        submitdata()
    };


    const handleComponentChange = (component) => {
        switch (component) {
            case "ProductInfo":
                setCurrentStep(0);
                break;
            case "Media":
                setCurrentStep(1);
                break;
            case "Social":
                setCurrentStep(2);
                break;
            case "Price":
                setCurrentStep(3);
                break;
            default:
                setCurrentStep(0);
        }
    };

    const steps = [
        <ProductInfo />,
        <Media />,
        <Social />,
        <Price />,
    ];


    const Navmenu = () => {     

        return (
            <div className={Css.NavWrapper}>
                <li onClick={() => handleComponentChange('ProductInfo')}>Product INFO</li>
                <li onClick={() => handleComponentChange('Media')}>Media</li>
                <li onClick={() => handleComponentChange('Social')}>Socials</li>
                <li onClick={() => handleComponentChange('Price')}>Pricing</li>
            </div>
        );
    };

    return (
        <>
            <div className={Css.AddProductWrapper}>
                <div className={Css.Title}>
                    <h1>Add product</h1>
                    <h3>This information will let us know more about you</h3>
                </div>
                <div className={Css.info}>
                    <form className={Css.Form} onSubmit={handleSubmit}>
                        <div className={Css.RenderDiv}>
                            <Navmenu />
                            {steps[currentStep]}
                            <div className={Css.btns}>
                                {currentStep > 0 && <button type="button" onClick={handlePrev}>Prev</button>}
                                {currentStep < steps.length - 1 && <button type="button" onClick={handleNext}>Next</button>}
                                {currentStep === steps.length - 1 && <button type="submit">Submit</button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Products;
