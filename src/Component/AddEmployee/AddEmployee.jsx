/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState ,useEffect } from 'react'
import Css from "./AddEmployee.module.css"
// eslint-disable-next-line no-unused-vars
import axios from 'axios';


export default function AddEmployee({onNavItemClick}) {

    const handleClick = (component) => {
        onNavItemClick(component);
      };

    const [inputs, setInputs] = useState({
        Name: '',
        UserName: '',
        Number: '',
        Email: '',
        Password: '',
        Address: '',
    })

    const onhandleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const onformSubmit = (event) => {

        event.preventDefault()
        const pre = JSON.parse(localStorage.getItem("EmployeeData")) || []
        const current = [...pre , inputs]
        console.log(current)

        localStorage.setItem("EmployeeData", JSON.stringify(current))

        const match =  pre.some((user)=>{
            return user.email === inputs.email 
        })

        console.log(match)
        handleClick('EmployeeTable')
        AddData()

    }

    const url = "http://localhost:3000/user"
    const [apidata, setApidata] = useState([])

    useEffect(() => {


        axios.get(url)
            .then((response) => setApidata(response.data))
        
        console.log(apidata)
        

    }, [])

    const AddData = () => {
        axios.post(url, inputs)
        .then(response => {
            console.log('Data successfully posted:', response.data);
            // Optionally, you can update state or perform other actions upon successful post
        })
        .catch(error => {
            console.error('Error posting data:', error);
            // Optionally, you can handle errors here, e.g., display an error message to the user
        });
    }

    return (
        <>  
            <div className={Css.FormWrapper}>
            <h1>Add New Employee</h1>
            <form className={Css.Form} onSubmit={onformSubmit}> 
                <label>Employee Name</label>
                <input
                    type="text"
                    name='Name'
                    value={inputs.name}
                    placeholder='Enter employee name'
                    onChange={onhandleChange}
                ></input> <br/>
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
                    value={inputs.email}
                    placeholder='Enter employee email'
                    onChange={onhandleChange}
                ></input><br></br>

                <label>Employee Password</label>
                <input
                    type="password"
                    name='Password'
                    value={inputs.pass}
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

                <button type="submit">Submit</button>
            </form>
           </div>
        </>
    )
}
