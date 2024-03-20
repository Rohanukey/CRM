/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Css from './UpdateForm.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateForm({ onNavItemClick }) {
    const handleClick = (component) => {
        onNavItemClick(component);
    };
    const navigate = useNavigate();
    const { id } = useParams();
    const url = "http://localhost:3000/Employees/";
    const [inputs, setInputs] = useState({
        Name: '',
        UserName: '',
        Number: '',
        Email: '',
        Password: '',
        Address: '',
        isAdmin: false  , // Add isAdmin field to inputs state
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(url + id)
            .then((response) =>
                setInputs({ ...inputs, Name: response.data.Name, Email: response.data.Email, Password: response.data.Password, Address: response.data.Address, Number: response.data.Number, UserName: response.data.UserName })
            )
            .catch((error) => console.log(error));
    }, []);

    const validateForm = () => {
        const errors = {};
        if (!inputs.Name.trim()) {
            errors.Name = 'Name is required';
        }
        if (!inputs.UserName.trim()) {
            errors.UserName = 'Username is required';
        }
        if (!inputs.Number.trim()) {
            errors.Number = 'Number is required';
        } else if (!/^\d{10}$/.test(inputs.Number)) {
            errors.Number = 'Number must be exactly 10 digits';
        }
        if (!inputs.Email.trim()) {
            errors.Email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.Email)) {
            errors.Email = 'Invalid email address';
        }
        if (!inputs.Password.trim()) {
            errors.Password = 'Password is required';
        }
        if (!inputs.Address.trim()) {
            errors.Address = 'Address is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onhandleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
        // Clear the error message when the user starts typing again
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const onformSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                await axios.put(url + id, inputs);
                alert('Data Updated');
                navigate('/Admin');
            } catch (error) {
                console.error('Error updating data:', error);
            }
        }
    };

    return (
        <>
            <div className={Css.FormWrapper}>
                <h1>Update Details Forms</h1>
                <form className={Css.Form} onSubmit={onformSubmit} method="post">
                    <label>Employee Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={inputs.Name}
                        placeholder="Enter employee name"
                        onChange={onhandleChange}
                    />
                    {errors.Name && <span className={Css.error}>{errors.Name}</span>}
                    <br />
                    <label>Employee Username</label>
                    <input
                        type="text"
                        name="UserName"
                        value={inputs.UserName}
                        placeholder="Enter employee username"
                        onChange={onhandleChange}
                    />
                    {errors.UserName && <span className={Css.error}>{errors.UserName}</span>}
                    <br />
                    <label>Employee Number</label>
                    <input
                        type="text"
                        name="Number"
                        value={inputs.Number}
                        placeholder="Enter employee number"
                        onChange={onhandleChange}
                    />
                    {errors.Number && <span className={Css.error}>{errors.Number}</span>}
                    <br />
                    <label>Employee Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={inputs.Email}
                        placeholder="Enter employee email"
                        onChange={onhandleChange}
                    />
                    {errors.Email && <span className={Css.error}>{errors.Email}</span>}
                    <br />
                    <label>Employee Password</label>
                    <input
                        type="password"
                        name="Password"
                        value={inputs.Password}
                        placeholder="Enter employee password"
                        onChange={onhandleChange}
                    />
                    {errors.Password && <span className={Css.error}>{errors.Password}</span>}
                    <br />
                    <label>Employee Address</label>
                    <input
                        type="text"
                        name="Address"
                        value={inputs.Address}
                        placeholder="Enter employee Address"
                        onChange={onhandleChange}
                    />
                    {errors.Address && <span className={Css.error}>{errors.Address}</span>}
                    <br />
                    <div className={Css.admin}><label>Is Admin:</label>
                        <input
                            type="checkbox"
                            name="isAdmin"
                            checked={inputs.isAdmin}
                            onChange={onhandleChange}
                        />
                    </div>
                    <div className={Css.btns}>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => navigate('/Admin')}>Back</button>                    
                    </div>
                </form>
            </div>
        </>
    );
}

export default UpdateForm;
