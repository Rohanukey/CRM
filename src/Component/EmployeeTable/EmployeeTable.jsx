import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Css from "./EmployeeTable.module.css"
import { Link } from 'react-router-dom'


function EmployeeTable({ onNavItemClick }) {
    const url = "http://localhost:3000/user/";
    const [apidata, setApidata] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = (component) => {
        onNavItemClick(component);
    };

    useEffect(() => {
        axios.get(url)
            .then((resp) => setApidata(resp.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = apidata.filter(item => {
        return (
            item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.UserName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const deletetask = (id) => {
        axios.delete(url + id)
            .then(() => {
                setApidata(prevData => prevData.filter(task => task.id !== id));
            })
            .catch((error) => console.error('Error deleting', error));
    };

    return (
        <>
            <div className={Css.ContentWrapper}>
                <div className={Css.options}>
                    <button className={Css.btn1} onClick={() => handleClick('addEmployee')}>Add An Employee</button>
                    <input
                        type="text"
                        placeholder="Search by Name, Email, or UserName"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={Css.searchInput}
                    />
                </div>

                <table className={Css.table}>
                    <thead>
                        <tr className={Css.tr}>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id} className={Css.tbody}>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Number}</td>
                                <td>{item.Email}</td>
                                <td>{item.Address}</td>
                                <td>{item.UserName}</td>
                                <td>{item.Password}</td>
                                <td>
                                    <button className={Css.Lbtn}>
                                        <Link className={Css.link} to={`/UpdateForm/${item.id}`}>Update</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className={Css.btn} onClick={() => deletetask(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EmployeeTable;



