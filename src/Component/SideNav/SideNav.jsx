/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Css from "./SideNav.module.css"
import img1 from "../../assets/react.svg"

function SideNav({ onNavItemClick }) {

    const handleClick = (component) => {
        onNavItemClick(component);
    };

    const [expand , setExpand] = useState(false)

    const toggle = () => {
        setExpand(prevState => !prevState);
      };

    const Products = ()=>{


        return(
            <div className={`${Css.ProductsWrapper} ${expand ? Css.full : ""}`}>
                <ul>
                <li onClick={() => handleClick('AddProduct')}>New Product</li>
                <li onClick={() => handleClick('EditProduct')}>Edit Product</li>
                <li>Product Page</li>
                <li>Product List</li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <div className={Css.SidenavWrapper}>
                <div className={Css.Title}>
                    <h3> Admin </h3>
                </div>
                <hr/>
                <div className={Css.Profile}>
                    <div className={Css.PfImg}>
                        <img src={img1} />
                    </div>
                    <div className={Css.PfName}>
                        <h3>Rohan ukey</h3>
                    </div>
                </div>
                <hr/>
                <div className={Css.SideMenu}>
                    <ul>
                        <li onClick={() => handleClick('dashboard')}><img src={img1} /><span>Dashboard</span></li>
                        <li onClick={() => handleClick('EmployeeTable')}><img src={img1} /><span>Employees</span></li>
                        <li onClick={() => handleClick('BalanceSheet')}><img src={img1} /><span>BalanceSheet</span></li>
                        <li onClick={() => handleClick('Tracker')}><img src={img1} /><span>Tracker</span></li>
                        <li onClick={() => handleClick('AddProduct')}><img src={img1} /><span>AddProduct</span></li>
                        <li onClick={()=> toggle()}><img src={img1} /><span>Products</span></li>
                        <Products/>
                        
                        
                        {/*<li onClick={() => handleClick('addEmployee')}><img src={img1} /><span>Add Employee</span></li>
    <li onClick={() => handleClick('UpdateForm')}><img src={img1} /><span>UpdateForm</span></li>*/}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav