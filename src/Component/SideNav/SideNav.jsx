/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Css from "./SideNav.module.css"

function SideNav({ onNavItemClick }) {

    const [active , setActive] =  useState(null)


    const handleClick = (component) => {
        setActive(component)
        onNavItemClick(component);
    };

    const [expand , setExpand] = useState(false)

    const toggle = () => {
        setExpand(prevState => !prevState);
      };

    const Products = ()=>{


        return(
            <div className={`${Css.ProductsWrapper} ${expand ? Css.full : ""}`}>
                <ul className={Css.Products}>
                <li onClick={() => {handleClick('AddProduct') }} className={`${active === "AddProduct" ? Css.active : "" }`}><span>N</span>New Product</li>
                <li onClick={() => {handleClick('EditProduct') }} className={`${active === "EditProduct" ? Css.active : "" }`}><span>E</span>Edit Product</li>
                <li onClick={() => {handleClick('ProductPage') }} className={`${active === "ProductPage" ? Css.active : "" }`}><span>P</span>Product Page</li>
                <li onClick={() => {handleClick('Productlist') }} className={`${active === "ProductList" ? Css.active : "" }`}><span>P</span>Product List</li>
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
                    <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/user-male-circle.png" alt="user-male-circle"/>
                    </div>
                    <div className={Css.PfName}>
                        <h3>Rohan ukey</h3>
                    </div>
                </div>
                <hr/>
                <div className={Css.SideMenu}>
                    <ul>
                        <li onClick={() => handleClick('dashboard')} className={`${active === "dashboard" ? Css.active : "" }`}><img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/control-panel--v1.png" alt="control-panel--v1"/><span>Dashboard</span></li>
                        <li onClick={() => handleClick('EmployeeTable')} className={`${active === "EmployeeTable" ? Css.active : "" }`} ><img width="30" height="30" src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="user-group-man-man"/><span>Employees</span></li>
                        <li onClick={() => handleClick('BalanceSheet')} className={`${active === "BalanceSheet" ? Css.active : "" }`}><img width="30" height="30" src="https://img.icons8.com/ios/50/overview-pages-2.png" alt="overview-pages-2"/><span>Invoice</span></li>
                        <li onClick={() => handleClick('Tracker')} className={`${active === "Tracker" ? Css.active : "" }`}><img width="30" height="30" src="https://img.icons8.com/ios/50/statistics.png" alt="statistics"/><span>Tracker</span></li>
                        <li onClick={()=> {toggle()}}><span>P</span><span>Products</span></li>
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