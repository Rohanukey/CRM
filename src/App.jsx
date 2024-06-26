/* eslint-disable no-unused-vars */
import { Router, BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css'
import Login from "./Component/Sign/SignUp"
import Tracker from "./Component/Tracker/Tracker"
import Invoice from "./Component/Invoice/Invoice"
import AdminPage from "./Component/AdminPage/AdminPage"
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute"
import Header from './Component/Header/Header'
import EmployeePage from "./Component/EmployeePage/EmployeePage"
import Dashboard from "./Component/Dashboard/Dashboard"
import UpdateForm from "./Component/UpdateForm/UpdateForm"
import EmployeeTable from "./Component/EmployeeTable/EmployeeTable"
import EmployeeDashboard from "./Component/EmployeeDashboard/EmployeeDashboard"
import ClientForm from "./Component/ClientForm/ClientForm"
import ClientList from "./Component/ClientList/ClientList"
import Bar1 from "../Bar1"
import Balancesheet from "./Component/Balancesheet/Balancesheet"
import ProductList from "./Component/ProductList/ProductList"
import ProductPage from "./Component/ProductPage/ProductPage"
import EditProduct from "./Component/EditProduct/EditProduct"



function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/ProductPage/:id" element={<ProductPage/>} />
        <Route path="/ProductList" element={<ProductList/>} /> */}
        <Route path="/EditProduct" element={<EditProduct/>} />
          
          <Route path="/ProductPage/:id" element={<ProductPage />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Tracker" element={<Tracker />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Admin" element={<ProtectedRoute Component={AdminPage} />} />
          <Route path="/EmployeePage" element={<ProtectedRoute Component={EmployeePage} />} />
          <Route path="/Dashboard" element={<ProtectedRoute Component={Dashboard} />} />
          <Route path="/UpdateForm/:id" element={<ProtectedRoute Component={UpdateForm} />} />
          <Route path="/EmployeeTable/:id" element={<ProtectedRoute Component={EmployeeTable} />} />
          <Route path="/Bar" element={<ProtectedRoute Component={Bar1} />} />
          <Route path="/BalanceSheet" element={<ProtectedRoute Component={Balancesheet} />} />
          <Route path="/ClientForm" element={<ProtectedRoute Component={ClientForm} />} />
          <Route path="/EmployeeDashboard" element={<ProtectedRoute Component={EmployeeDashboard} />} />
          {/*<Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}/>*/}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
