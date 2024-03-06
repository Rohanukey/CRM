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
  const [client, setClient] = useState(true);
  const Employee = localStorage.getItem('Employee');
  const Client = localStorage.getItem('Client');



  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
    setNotLogin(true);
    setAdmin(true);
    setEmployee(true);
    setClient(true);
    localStorage.removeItem("ADMIN");
    localStorage.removeItem("Employee");
    localStorage.removeItem("Client");
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
    if (admi) {

      setAdmin(false);

    }

    else if (Employee) {
      setEmployee(false);
    }

    else if (Client) {
      setClient(false);
    }
  }, [admi, Employee, Client]);




  return (
    <>
      <div className={Css.header}>
        <h1>CRM</h1>
        {/*<Link to="/Home">Home</Link><br />*/}
        <Link className={admin ? Css.Display : ""} to="/Admin">Admin</Link><br />
        <Link className={employee ? Css.Display : ""} to="/EmployeePage">Employee</Link><br />
        {/*<Link className={client ? Css.Display : ""} to="/ClientPage">Client</Link><br />
         <Link to="/About">About</Link><br />*/}
        <button className={notlogin ? Css.Display : ""} onClick={handleLogout}>Log out</button>
      </div>

    </>
  );
}

export default Header;
