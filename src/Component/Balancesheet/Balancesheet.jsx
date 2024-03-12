
import Css from "./Balancesheet.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function Balancesheet() {

    const url = "http://localhost:3000/expenses"
    const [apidata, setApidata] = useState([]);


    useEffect(() => {
        axios.get(url)
            .then((resp) => setApidata(resp.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const totalPrice = apidata.reduce((acc, data) => acc + data.price, 0);
    const totalQuantity = apidata.reduce((acc, data) => acc + data.quantity, 0);


    return (
        <>
            <div className={Css.TableWrapper}>
                <table className={Css.Table}>
                    <thead>
                        <div className={Css.Info}>
                            <tr className={Css.tr}>
                                <td>Company Name</td>
                                <td>Company Address</td>
                                <td>Date</td>
                            </tr>
                            <tr className={Css.tr}>
                                <td>Techgicus software solutions</td>
                                <td>main street</td>
                                <td>12/5/2024</td>
                            </tr>
                        </div>
                    </thead>
                    <tbody className={Css.tbody}>
                        <div className={Css.list}>
                            <tr className={Css.heading}>
                                <td>Item</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Date</td>
                            </tr>
                            {
                                apidata.map((data) => (
                                    <tr key={data.id} className={Css.tr3}>
                                        <td>{data.item}</td>
                                        <td>1</td>
                                        <td>{data.price}rs</td>
                                        <td>{data.date}</td>
                                    </tr>
                                ))
                            }

                        </div>
                        <div className={Css.result}>
                            <tr className={Css.tr3}>
                                <td>Total</td>
                                <td>{totalPrice}rs</td>
                            </tr>
                            <tr className={Css.tr3}>
                                <td>Total Quantity</td>
                                <td>{totalQuantity}</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Balancesheet