import React, { useEffect, useState } from 'react'
import Css from './EmployeeDashboard.module.css'
import axios from 'axios'
import SideNav from '../EmpSideNav/EmpSideNav'
import AddEmployee from '../AddEmployee/AddEmployee'
import Dashboard from '../Dashboard/Dashboard'
import UpdateForm from '../UpdateForm/UpdateForm'
import EmployeeTable from '../EmployeeTable/EmployeeTable'
import ClientData from '../ClientData/ClientData'
import ClientForm from '../ClientForm/ClientForm'

function EmployeeDashboard() {

    const [selectedComponent, setSelectedComponent] = useState('dashboard');
    const handleNavItemClick = (component) => {
        setSelectedComponent(component);
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
            case 'ClientData':
                return <ClientData onNavItemClick={handleNavItemClick} />;
            case 'ClientForm':
                return <ClientForm onNavItemClick={handleNavItemClick} />;
            default:
                return null;
        }
    };

    return (
        <>

            <div className={Css.AdminPageWrapper}>
                <h1>Employee Dashborad</h1>
                <div className={Css.ComponentWrapper}>
                    <SideNav onNavItemClick={handleNavItemClick} />
                    {renderComponent()}
                </div>
            </div>
        </>
    )
}

export default EmployeeDashboard
