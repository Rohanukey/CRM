


import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Invoice.module.css';


import techImage from "../../assets/tech.png";


function Invoice() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/projects")
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handlePrint = (id) => {
        const printData = userData.find(item => item.id === id);
        if (printData) {
            const printContent = `
                <div class="invoice">
                    <div class="header">
                      
                        <h2>Invoice Detail</h2>
                    </div>
                    <div class="details">
                     
                <img   src="${techImage}" alt="logo"  class="companylogo"/>
                        <table>
                            <tr>
                                <td><strong>Name:</strong></td>
                                <td>${printData.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Project:</strong></td>
                                <td>${printData.Project}</td>
                            </tr>
                            <tr>
                                <td><strong>Date:</strong></td>
                                <td>${printData.date}</td>
                            </tr>
                            <tr>
                                <td><strong>Total:</strong></td>
                                <td>${printData.totalAmount}</td>
                            </tr>
                            <tr>
                                <td><strong>Advanced:</strong></td>
                                <td>${printData.advancedAmount}</td>
                            </tr>
                            <tr>
                                <td><strong>Remaining:</strong></td>
                                <td>${printData.remainingAmount}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="footer">
                        <div class="address">
                            <p>Payment Info<br/> Bank Of India <br/>Account Name:Bharti Zade <br/>Account No:12345677</p>
                        </div>
                        <div class="signature">
                            <p>Authorized Signature</p>
                            <h3>B.G.ZADE</h3>
                        </div>
                    </div>
                </div>`;
            printElement(printContent);
        } else {
            console.error('Data not found for printing.');
        }
    };

    const printElement = (content) => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Invoice Detail</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        .invoice { padding: 20px; border: 1px solid #ccc; }
                        .header { text-align: center; margin-bottom: 20px; }
                        .details { margin-bottom: 20px;  }
                        .companylogo { max-width: 20px; margin-bottom: 10px; height:20px; padding: 10px; }
                        .footer { border-top: 1px solid #ccc; padding-top: 10px; }
                        .address { margin-bottom: 10px; }
                        .signature { text-align: right; }
                        .companylogo{max-width:100px; height: 60px;}
                        table { width: 100%; height:auto; text-align: right; justify-content: center;}
                        table td { padding: 5px;   border: 1px solid #ccc;
                            text-align: center;    border-collapse: collapse; }
                        table td:first-child { width: 150px; }
                    </style>


                   
                      
                </head>
                <body>
              
           
        
               
                    ${content}
                    <script>
                        window.onload = function() { window.print(); }
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <div className={styles.invoiceContainer}>
            <div className={styles.invoiceHeader}>
                <h2>Invoice Tracker</h2>
            </div>
            
            <table className={styles.invoiceTable}> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Project</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Advanced</th>
                        <th>Remaining</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.Project}</td>
                            <td>{data.date}</td>
                            <td>{data.totalAmount}</td>
                            <td>{data.advancedAmount}</td>
                            <td>{data.remainingAmount}</td>
                            <td>
                                <button className={styles.pp} onClick={() => handlePrint(data.id)}>Print</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invoice;
