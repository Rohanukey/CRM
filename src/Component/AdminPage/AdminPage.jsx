/* eslint-disable no-unused-vars */
import React, { useContext , useState} from 'react'
import Css from "./AdminPage.module.css"
import SideNav from '../SideNav/SideNav'
import AddEmployee from '../AddEmployee/AddEmployee'
import Dashboard from '../Dashboard/Dashboard'
import UpdateForm from '../UpdateForm/UpdateForm'
import EmployeeTable from '../EmployeeTable/EmployeeTable'

function AdminPage() {

  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const handleNavItemClick = (component) => {
    setSelectedComponent(component);
  };
  

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'EmployeeTable':
        return <EmployeeTable  onNavItemClick={handleNavItemClick}/>;
      case 'addEmployee':
        return <AddEmployee onNavItemClick={handleNavItemClick}/>;
      case 'UpdateForm':
        return <UpdateForm onNavItemClick={handleNavItemClick}/>;
      case 'EmployeeData':
        return <UpdateForm onNavItemClick={handleNavItemClick}/>;
      default:
        return null;
    }
  };

  return (
    <>
    
      <div className={Css.AdminPageWrapper}>
        <h1>Admin Dashborad</h1>
        <div className={Css.ComponentWrapper}>
        <SideNav onNavItemClick={handleNavItemClick} />
        {renderComponent()}
        </div>
      </div>
    </>
  )
}

export default AdminPage