import React, { useState, useEffect } from 'react';
import axios from 'axios';
import printJS from 'print-js';
import Css from "./BalanceSheet.module.css";

function Balancesheet() {

    const [apidata, setApidata] = useState([]);
    const [inputs, setInputs] = useState({
        Name: "",
        Address: "",
        Date: "",
        CName: "",
        CAddress: "",
        CGSTIN: "",
        Ccity: "",
        Cstate: "",
        Ccountry: "",
    });
    const [items, setItems] = useState([{ id: "123", item: '', Qty: '', price: '', SGST: '', CGST: '', Cess: '', Amount: '' }]);

    useEffect(() => {
        const url = "http://localhost:3000/expenses";
        axios.get(url)
            .then((resp) => setApidata(resp.data), console.log(items))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        console.log(items)
    }, [items]);

    const totalPrice = apidata.reduce((acc, data) => acc + data.price, 0);
    const totalQuantity = apidata.reduce((acc, data) => acc + data.quantity, 0);

    const handlePrint = () => {
        printJS({
            printable: 'Table', // ID of the element to print
            type: 'html', // Type of printable: 'html', 'image', 'pdf'
            documentTitle: 'Balance Sheet', // Title of the printed document
            css: 'src/Component/Balancesheet/Balancesheet.module.css' // Optional: Path to your CSS file
        });
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...items];
        list[index][name] = value;
        setItems(list);
        console.log(items)
    };

    const handleAddItem = () => {
        setItems([...items, { id: "", item: '', Qty: '', price: '', SGST: '', CGST: '', Cess: '', Amount: '' }]);
    };

    const del = (ind) => {
        let newValue = items.filter((item) => item.id !== ind)
        console.log("this is new value: ", newValue)
        setItems(newValue)
    }



    return (
        <>
            <div className={Css.TableWrapper}>

                <button className={Css.Printbtn} onClick={handlePrint}>Print BalanceSheet</button>
                <form className={Css.Form} id="Table">
                    <table className={Css.Table}>
                        <div className={Css.Title}>
                            <h1>Tax Invoice</h1>
                        </div>
                        <thead>
                            <div className={Css.Info}>
                                <div className={Css.companyinfo}>
                                    <tr className={Css.tr}>
                                        <td>
                                            <input
                                                type="text"
                                                name="Name"
                                                value={inputs.Name}
                                                placeholder="Company Name"
                                                onChange={(e) => setInputs({ ...inputs, Name: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="Address"
                                                value={inputs.Address}
                                                placeholder="Company Address"
                                                onChange={(e) => setInputs({ ...inputs, Address: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name="Date"
                                                value={inputs.Date}
                                                onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                </div>
                                <div className={Css.clientinfo}>
                                    <tr className={Css.tr}>
                                        <td>
                                            <input
                                                type="text"
                                                name="CName"
                                                value={inputs.CName}
                                                placeholder="Client's Company Name"
                                                onChange={(e) => setInputs({ ...inputs, Name: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="CAddress"
                                                value={inputs.CAddress}
                                                placeholder="Company Address"
                                                onChange={(e) => setInputs({ ...inputs, Address: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="CGSTIN"
                                                placeholder="Client's GSTIN"
                                                value={inputs.CGSTIN}
                                                onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="Ccity"
                                                placeholder="city"
                                                value={inputs.Ccity}
                                                onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="Cstate"
                                                placeholder="state"
                                                value={inputs.Cstate}
                                                onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="Ccountry"
                                                placeholder="country"
                                                value={inputs.Ccountry}
                                                onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                </div>
                            </div>
                        </thead>
                        <tbody className={Css.tbody} >
                            <div className={Css.list}>
                                <tr className={Css.heading}>
                                    <td>Item</td>
                                    <td>Qty</td>
                                    <td>Rate</td>
                                    <td>SGST</td>
                                    <td>CGST</td>
                                    <td>Cess</td>
                                    <td>Amount</td>
                                </tr>
                                {items.map((item, index) => (
                                    <tr key={index} className={Css.tr3}>
                                        {index}
                                        <td>
                                            <input
                                                type="text"
                                                name="id"
                                                value={item.id}
                                                placeholder="id"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="item"
                                                value={item.item}
                                                placeholder="item name"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="Qty"
                                                value={item.Qty}
                                                placeholder="Quantity"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="rate"
                                                value={item.price}
                                                placeholder="0"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="SGST"
                                                value={item.itemdate}
                                                placeholder="0"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="CGST"
                                                value={item.itemdate}
                                                placeholder="0"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="Cess"
                                                value={item.itemdate}
                                                placeholder="0"
                                                onChange={(e) => handleInputChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            0
                                        </td>
                                        <button type='button' style={{ width: "50px" }} onClick={() => del(item.id)} >X</button>
                                    </tr>
                                ))}
                            </div>
                            <div>
                                <button type="button" onClick={handleAddItem}>+</button>
                            </div>
                            <div className={Css.result}>
                                <tr className={Css.tr4}>
                                    <td>Sub total</td>
                                    <td>SGST</td>
                                    <td>CGST</td>
                                    <td>Total</td>
                                </tr>
                                <tr className={Css.tr4}>
                                    <td>Total Quantity</td>
                                    <td>{totalQuantity}</td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default Balancesheet;
