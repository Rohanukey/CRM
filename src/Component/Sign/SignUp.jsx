


import { useState, useEffect } from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

    const [userData, setUserData] = useState([]);
    const [signUpData, setSignUpData] = useState([]);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        UserName: "",
        Password: ""
    })

    const onhandlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(valueS => ({ ...valueS, [name]: value }))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get('http://localhost:3000/Employees/');
                const signUpResponse = await axios.get('http://localhost:3000/signUp');
                setUserData(userResponse.data);
                setSignUpData(signUpResponse.data);
            } catch (err) {
                console.log("Error getting data:", err);
            }
        };
        fetchData();

    }, []);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior


        const userResult = userData.some((data) => (data.UserName === inputs.UserName && data.Password === inputs.Password));
        const signUpResult = signUpData.some((data) => (data.username === inputs.UserName && data.password === inputs.Password));

        if (userResult) {
            alert("User login successful");
            navigate("/EmployeeDashboard"); // Redirect to the User Dashboard
            localStorage.setItem("login", true)
        } else if (signUpResult) {
            alert("Signup login successful");
            navigate("/Admin"); // Redirect to the Admin Dashboard
            localStorage.setItem("login", true)
        } else {
            alert('User not found or password incorrect');
            // Handle the case when user is not found or password is incorrect
        }

    };

    return (
        <div className={styles.container}>
            <h2 className={styles.log}>Login</h2>
            <form onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                    <label>Name</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        name='UserName'
                        placeholder="Username"
                        value={inputs.UserName}
                        onChange={onhandlechange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        className={styles.inputField}
                        type="password"
                        name='Password'
                        placeholder="Password"
                        value={inputs.Password}
                        onChange={onhandlechange}
                    />
                </div>
                <button className={styles.bt} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default SignUp;
