/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Css from "./AdminPage.module.css";
import SideNav from '../SideNav/SideNav';
import AddEmployee from '../AddEmployee/AddEmployee';
import Dashboard from '../Dashboard/Dashboard';
import UpdateForm from '../UpdateForm/UpdateForm';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Balancesheet from '../Balancesheet/Balancesheet';
import bars from "../../assets/react.svg"  
import Tracker from "../Tracker/Tracker"
import AddProduct from "../AddProduct/AddProduct"
import EditProduct from "../EditProduct/EditProduct"
import ProductPage from "../"
import Productlist from "../EditProduct/EditProduct"

function AdminPage() {

  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const handleNavItemClick = (component) => {
    setSelectedComponent(component);
  };

  const [onTap, setOnTap] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {

      const newwidth = window.innerWidth
      setWidth(newwidth);
      if (newwidth < 1300) {
        setOnTap(true)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  const toggleToggleNav = () => {
    setOnTap(prevState => !prevState);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'EmployeeTable':
        return <EmployeeTable onNavItemClick={handleNavItemClick} />;
      case 'addEmployee':
        return <AddEmployee onNavItemClick={handleNavItemClick} />;
      case 'UpdateForm':
        return <UpdateForm onNavItemClick={handleNavItemClick} />;
      case 'EmployeeData':
        return <UpdateForm onNavItemClick={handleNavItemClick} />;
      case 'BalanceSheet':
        return <Balancesheet onNavItemClick={handleNavItemClick} />;
      case 'Tracker':
        return <Tracker onNavItemClick={handleNavItemClick} />;
      case 'AddProduct':
        return <AddProduct onNavItemClick={handleNavItemClick} />;
      case 'EditProduct':
        return <EditProduct onNavItemClick={handleNavItemClick} />;
      case 'ProductPage':
        return <EditProduct onNavItemClick={handleNavItemClick} />;
      case 'Productlist':
        return <EditProduct onNavItemClick={handleNavItemClick} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={Css.pageContent}>
        <div className={`${Css.ToggleNav} ${onTap || (width <= 1299 && onTap) ? Css.Display : ""}`}>
          <SideNav onNavItemClick={handleNavItemClick} />
        </div>
        <div className={Css.AdminPageWrapper}>
          <div className={Css.options}>
            <div className={Css.btn}><button onClick={toggleToggleNav}><img className={Css.bars} src={bars} /></button></div>
          </div>
          <div className={Css.ComponentWrapper}>
            {renderComponent()}
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminPage;
