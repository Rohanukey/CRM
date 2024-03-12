/* eslint-disable no-unused-vars */
import { Router, BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css'
import Login from "./Component/ContactUs/ContactUs"
import AdminPage from "./Component/AdminPage/AdminPage"
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute"
import Header from './Component/Header/Header'
import EmployeePage from "./Component/EmployeePage/EmployeePage"
import Dashboard from "./Component/Dashboard/Dashboard"
import UpdateForm from "./Component/UpdateForm/UpdateForm"
import EmployeeTable from "./Component/EmployeeTable/EmployeeTable"
import EmployeeDashboard from "./Component/EmployeeDashboard/EmployeeDashboard"
import ClientForm from "./Component/ClientForm/ClientForm"


function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<ProtectedRoute Component={AdminPage} />} />
          <Route path="/EmployeePage" element={<ProtectedRoute Component={EmployeeDashboard} />} />
          <Route path="/Dashboard" element={<ProtectedRoute Component={Dashboard} />} />
          <Route path="/UpdateForm/:id" element={<ProtectedRoute Component={UpdateForm} />} />
          <Route path="/EmployeeTable/:id" element={<ProtectedRoute Component={EmployeeTable} />} />
          <Route path="/ClientForm" element={<ProtectedRoute Component={ClientForm} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
