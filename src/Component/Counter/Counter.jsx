import React, { useState } from 'react'
import Css from "./Counter.module.css"

function Counter({ value , project}) {



    return (
        <>
            <div className={Css.Container}>
                <h2>Rs.<span>{value}</span></h2>
                <h4>{project}</h4>
            </div>
        </>
    )
}

export default Counter