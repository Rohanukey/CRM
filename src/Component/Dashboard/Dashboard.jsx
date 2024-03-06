import React, { useEffect, useState } from 'react'
import Css from "./Dashboard.module.css"
import Counter from '../Counter/Counter';
import axios from 'axios';

function Dashboard() {

  const arr =
    [{ id: 1, clientsObtained: 50 },
    { id: 2, clientsObtained: 50 },
    { id: 3, clientsObtained: 50 },
    { id: 4, clientsObtained: 50 },
    ]

    const url = "http://localhost:3000/BalanceSheets";
    const [apidata, setApidata] = useState([])


  useEffect(() => {
    localStorage.getItem("EmployeeData")

    axios.get(url)
          .then((response) => setApidata(response.data))
          .catch((error) => error.message)

          console.log(apidata)
  }, [])

  const sum = arr.reduce((acc, curr) => acc + curr.clientsObtained, 0);
  console.log(" this is " + sum)

  const income =  apidata.reduce((acc, curr) => acc + curr.Income,0)
  
  const expenses =  apidata.reduce((acc, curr) => acc + curr.Expenses,0)
  
  return (
    <>
      <div className={Css.DashboardWrapper}>
        <div className={Css.CounterWrapper}>
          <Counter value={sum}  project = " Yearly Projects "/>
          <Counter value={income} project = " Yearly Income " />
          <Counter value={expenses} project = " Yearly expenses " />
        </div>
      </div>
    </>
  )
}

export default Dashboard