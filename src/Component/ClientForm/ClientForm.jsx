
import { useState } from 'react';
import Css from './ClientForm.module.css';
function ClientForm({ click }) {


  const [inputs, setInputs] = useState(
    {
      name: "",
      email: "",
      contact: "",
      Projectname: "",
      Projectprice: "",
      Advancepay: "",
      Remainingpay: "",
      date: "",
      Address: "",

    }
  )

  
  const handleclick = (Component) => {
    click(Component)
  }


  const onhandlechange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const formsubmit = (event) => {
    event.preventDefault()
    const data = JSON.parse(localStorage.getItem('clientdata')) || []

    const newdata = [...data, inputs]

    localStorage.setItem('clientdata', JSON.stringify(newdata))
    console.log(newdata)

    handleclick("ClientData")
  }

  return (

    <>
      <div className={Css.container}>


        <form onSubmit={formsubmit}>

          <label htmlFor="fname">Name:</label><br />
          <input type="text" id="name" name="name" value={inputs.name} placeholder='name' onChange={onhandlechange} /> <br />

          <label htmlFor="fname">Email:</label><br />
          <input type="text" id="email" name="email" value={inputs.email} placeholder='mail id' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Contact no.:</label><br />
          <input type="text" id="Contact no." name="contact" value={inputs.contact} placeholder='Contact no.' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Project name:</label><br />
          <input type="text" id="Projectname" name="Projectname" value={inputs.Projectname} placeholder='Project name' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Project price:</label><br />
          <input type="text" id="Projectprice" name="Projectprice" value={inputs.Projectprice} placeholder='Project price' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Advance pay:</label><br />
          <input type="text" id="Advancepay" name="Advancepay" value={inputs.Advancepay} placeholder='Advance pay' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Remaining pay:</label><br />
          <input type="text" id="Remainingpay" name="Remainingpay" value={inputs.Remainingpay} placeholder='Remaining pay' onChange={onhandlechange} /><br />

          <label htmlFor="fname">Date:</label><br />
          <input type="date" id="date" name="date" value={inputs.date} placeholder='date' onChange={onhandlechange} /> <br />

          <label htmlFor="fname">Address:</label><br />
          <input type="Address" id="Address" name="Address" value={inputs.Address} placeholder='Address' onChange={onhandlechange} /> <br />

          <button className={Css.btn} type='submit' >Submit</button>
        </form>


      </div>

    </>


  )
}

export default ClientForm;
