import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Css from "./Header.module.css";


function Header() {
  const navigate = useNavigate();
  const login = localStorage.getItem('login');
  const [notlogin, setNotLogin] = useState(true);
  const admi = localStorage.getItem('ADMIN');
  const [admin, setAdmin] = useState(true);
  const [employee, setEmployee] = useState(true);
  const Employee = localStorage.getItem('Employee');
  const Client = localStorage.getItem('Client');



  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
    setNotLogin(true);
    setAdmin(true);
    setEmployee(true);
    localStorage.removeItem("ADMIN");
    localStorage.removeItem("Employee");
  };


  useEffect(() => {
    if (login) {

      setNotLogin(false);

    }

    else {
      setNotLogin(true);
    }
  }, [login]);


  useEffect(() => {
    if (login) {

      setAdmin(false);
      setEmployee(false);

    }

    // else if (login) {
    //   setEmployee(false);
    // }

  }, [admi, Employee, Client]);




  return (
    <>
      <div className={Css.header}>
        <h1>CRM</h1>
        <Link className={admin ? Css.Display : ""} to="/Admin">Admin</Link><br />
        <Link className={employee ? Css.Display : ""} to="/EmployeeDashboard">Employee</Link><br />
        <button className={notlogin ? Css.Display : ""} onClick={handleLogout}>Log out</button>
      </div>

    </>
  );
}

export default Header;
