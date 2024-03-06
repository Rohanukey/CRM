/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ProtectedRoute(props) {

  const { Component } = props
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const login = localStorage.getItem("login")

    if (!login) {
      navigate("/");
    }
    else {
      setLoading(false); // Mark loading as false after checking authentication
    }
  },); // Include navigate in the dependency array

  if (loading) {
    return null; // Render nothing or loading indicator while checking authentication
  }

  return (



    <>
      < Component />
    </>
  )
}

export default ProtectedRoute;