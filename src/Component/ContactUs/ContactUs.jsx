    /* eslint-disable no-unused-vars */
    import { useState, useContext, useEffect } from 'react'
    import ContactCss from './ContactUsNew.module.css'
    import { motion } from "framer-motion"
    import { useNavigate } from 'react-router-dom'
    import axios from 'axios'




    function ContactUs() {


        //  
        
        

        

        //
        const navigate = useNavigate()

        const AdminData = [
            { id: 1, name: "Tushar", num: 7777788888, email: "tushar@gmail.com", address: "78, main street", },
            { id: 2, name: "sham", num: 6766788888, email: "tushar@gmail.com", address: "78, main street", },
            { id: 3, name: "ram", num: 7576789828, email: "tushar@gmail.com", address: "78, main street", },
        ]



        const [inputs, setInputs] = useState({
            username: '',
            email: '',
            pass: '',
            select: '',
        })

        


        const [error, setError] = useState({})
        const onhandleSubmit = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }

        const ondatasumbit = (event) => {
            event.preventDefault();
            const errorValidation = {}
            if (!inputs.username.trim()) {
                errorValidation.username = "username is required"
            }
            if (!inputs.email.trim()) {
                errorValidation.email = "email is required"
            }
            if (!inputs.pass.trim()) {
                errorValidation.pass = "Password is required"
            }
            setError(errorValidation)

            if (Object.keys(errorValidation).length === 0) {
                alert("Form submited successfully")
                localStorage.setItem("login", true)
                navigate("/Home")
            }

            if (inputs.select === "ADMIN") {
                localStorage.setItem("ADMIN", true)
                navigate("/Admin")
            }
            else if (inputs.select === "Employee") {
                localStorage.setItem("Employee", true)
                navigate("/EmployeeDashboard")

            }
            else if (inputs.select === "Client") {
                localStorage.setItem("Client", true)
                navigate("/ClientPage")

            }




            const pre = JSON.parse(localStorage.getItem('userData')) || []
            const current = [...pre, inputs]
            console.log(current)

            localStorage.setItem("userData", JSON.stringify(current))
            localStorage.setItem("AdminData", JSON.stringify(AdminData))


        }



        return (

            <>
                <div className={ContactCss.Page}>
                    <form onSubmit={ondatasumbit}>
                        <div className={ContactCss.case}>
                            <h1>Login</h1>
                            <p>This is a Demo form for learning Protected route</p>
                            <label htmlFor='Name'>Name: </label>
                            <input type='text' name='username' placeholder='Enter Name' value={inputs.username} onChange={onhandleSubmit} />
                            {error.username && <span>{error.username}</span>}
                            <label htmlFor='Email'>Email: </label>
                            <input type='text' name='email' placeholder='Enter Email' value={inputs.email} onChange={onhandleSubmit}></input>
                            {error.username && <span>{error.email}</span>}
                            <label htmlFor='Pass'>Password: </label>
                            <input type='text' name='pass' placeholder='Enter Password' value={inputs.pass} onChange={onhandleSubmit}></input>
                            {error.username && <span>{error.pass}</span>}
                            <label htmlFor='Busi' >User Type: </label>
                            <select name='select' value={inputs.select} onChange={onhandleSubmit}>
                                <option>User Type</option>
                                <option name="opt" value={"ADMIN"}>ADMIN</option>
                                <option name="opt" value={"Employee"}>Employee</option>
                                <option name="opt" value={"Client"}>Client</option>
                            </select>
                            <motion.button type='submit' whileHover={{ scale: 1.05 }} >Submit</motion.button>

                        </div>

                    </form>
                    <div className={ContactCss.Details}>
                        <div className={ContactCss.sub_details}>
                            <h3>Welcome to Techgicus</h3>
                            <h4>Introduction to Front-End Development:</h4>
                            <h4>HTML (Hypertext Markup Language)</h4>
                            <h4>CSS (Cascading Style Sheets)</h4>
                            <h4>JavaScript</h4>
                            <h4>Version Control</h4>
                            <h4>Responsive Web Design</h4>
                            <h4>JavaScript Frameworks/Libraries</h4>
                            <h4>AJAX (Asynchronous JavaScript and XML)</h4>
                            <h4>Web Performance Optimization</h4>
                        </div>


                    </div>
                </div>

            </>
        )


    }


    export default ContactUs;
