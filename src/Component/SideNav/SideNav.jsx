/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Css from "./SideNav.module.css"
import img1 from "../../assets/react.svg"

function SideNav({ onNavItemClick }) {

    const handleClick = (component) => {
        onNavItemClick(component);
    };

    return (
        <>
            <div className={Css.SidenavWrapper}>
                <div className={Css.Profile}>
                    <div className={Css.PfImg}>
                        <img src={img1} />
                    </div>
                    <div className={Css.PfName}>
                        <h3>Rohan ukey</h3>
                    </div>
                </div>
                <div className={Css.SideMenu}>
                    <h3>SideMenu</h3>
                    <ul>
                        <li onClick={() => handleClick('dashboard')}><img src={img1} /><span>Dashboard</span></li>
                        <li onClick={() => handleClick('EmployeeTable')}><img src={img1} /><span>Employees</span></li>
                        <li onClick={() => handleClick('ClinetData')}><img src={img1} /><span>ClientData</span></li>
                        {/*<li onClick={() => handleClick('addEmployee')}><img src={img1} /><span>Add Employee</span></li>
    <li onClick={() => handleClick('UpdateForm')}><img src={img1} /><span>UpdateForm</span></li>*/}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav