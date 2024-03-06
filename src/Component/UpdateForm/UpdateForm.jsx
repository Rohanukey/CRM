/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Css from "./UpdateForm.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



function UpdateForm({ onNavItemClick }) {
    const handleClick = (component) => {
        onNavItemClick(component);
    };
    const navigate = useNavigate()
    const { id } = useParams();
    const url = "http://localhost:3000/user/"
    const [apidata, setApidata] = useState([])
    const [inputs, setInputs] = useState({
        Name: '',
        UserName: '',
        Number: '',
        Email: '',
        Password: '',
        Address: '',
    })

    useEffect(() => {
        axios.get(url + id)
            .then((response) =>
                setInputs({ ...inputs, Name: response.data.Name, Email: response.data.Email, Password: response.data.Password, Address: response.data.Address, Number: response.data.Number, UserName: response.data.UserName })
            )
            .catch((error) => console.log(error))
    }
        , [])


    const onhandleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const onformSubmit = (event) => {

        event.preventDefault()
        {/*const pre = JSON.parse(localStorage.getItem("EmployeeData")) || []
        const current = [...pre, inputs]
        console.log(current)

        localStorage.setItem("EmployeeData", JSON.stringify(current))

        const match = pre.some((user) => {
            return user.email === inputs.email
        })

        console.log(match)
    */}

        axios.put(url + id, inputs)
            .then((response) => alert("Data Updated"),
            navigate("/Admin")
            )
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className={Css.FormWrapper}>
                <h1>Update Details Forms</h1>
                <form className={Css.Form} onSubmit={onformSubmit} method='post'>
                    <label>Employee Name</label>
                    <input
                        type="text"
                        name='Name'
                        value={inputs.Name}
                        placeholder='Enter employee name'
                        onChange={onhandleChange}
                    ></input> <br />
                    <label>Employee UserName</label>
                    <input
                        type="text"
                        name='UserName'
                        value={inputs.UserName}
                        placeholder='Enter employee UserName'
                        onChange={onhandleChange}
                    ></input><br></br>
                    <label>Employee Number</label>
                    <input
                        type="Number"
                        name='Number'
                        value={inputs.Number}
                        placeholder='Enter employee Phone Number'
                        onChange={onhandleChange}
                    ></input><br></br>
                    <label>Employee email</label>
                    <input
                        type="email"
                        name='Email'
                        value={inputs.Email}
                        placeholder='Enter employee email'
                        onChange={onhandleChange}
                    ></input><br></br>

                    <label>Employee Password</label>
                    <input
                        type="password"
                        name='Password'
                        value={inputs.Password}
                        placeholder='Enter employee password'
                        onChange={onhandleChange}
                    ></input><br></br>

                    <label>Employee Address</label>
                    <input
                        type="text"
                        name='Address'
                        value={inputs.Address}
                        placeholder='Enter employee Address'
                        onChange={onhandleChange}
                    ></input>
                    <div className={Css.btns}>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => navigate('/Admin')}>Back</button>                    
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateForm