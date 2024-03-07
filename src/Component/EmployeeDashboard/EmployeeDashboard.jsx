import React, { useEffect, useState } from 'react'
import Css from './EmployeeDashboard.module.css'
import axios from 'axios'

function EmployeeDashboard() {

    const url = "http://localhost:3000/BalanceSheets"


    //  const [a , setA] = useState([])

    // useEffect(()=>{

    //     axios.get(url)
    //             .then((response)=> (setA(response.data)),
    //             console.log(a)
    //             )

    // },[])

    const [a, setA] = useState([])

    useEffect(() => {

        axios.get(url)
            .then((response) => (setA(response.data)),
                console.log(a)
            )

    }, [])







    return (
        <div className={Css.DashboardWrapper}>
            <h1>This is Employee Dashborad</h1>
        </div>
    )
}

export default EmployeeDashboard
