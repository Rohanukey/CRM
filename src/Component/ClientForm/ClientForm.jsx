import { useState } from 'react';
import Css from './ClientForm.module.css';
import axios from 'axios';

function ClientForm({ onNavItemClick }) {


  const [apidata, setApidata] = useState([])
  const url = "http://localhost:3000/Clients"

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    contact: "",
    Projectname: "",
    Projectprice: "",
    Advancepay: "",
    Remainingpay: "",
    date: "",
    Address: "",
  });

  const post = () => {

    try {
      axios.post(url, inputs)
      console.log(Response.data)
    }
    catch (err) {
      console.log("Error posting data", err)
    }



  }

  const handleclick = (Component) => {
    onNavItemClick(Component);
  };


  const onhandlechange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const formsubmit = (event) => {
    event.preventDefault();

    if (!inputs.name || !inputs.email || !inputs.contact) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(inputs.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(inputs.contact)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const data = JSON.parse(localStorage.getItem('clientdata')) || [];
    const newdata = [...data, inputs];
    localStorage.setItem('clientdata', JSON.stringify(newdata));
    post()
    handleclick("ClientData");
  };

  return (
    <div className={Css.container}>
      <form className={Css.mainform} onSubmit={formsubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={inputs.name} placeholder='Name' onChange={onhandlechange} required /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={inputs.email} placeholder='Email' onChange={onhandlechange} required /><br />

        <label htmlFor="contact">Contact no.:</label><br />
        <input type="tel" id="contact" name="contact" value={inputs.contact} placeholder='Contact no.' onChange={onhandlechange} required /><br />

        <label htmlFor="Projectname">Project name:</label><br />
        <input type="text" id="Projectname" name="Projectname" value={inputs.Projectname} placeholder='Project name' onChange={onhandlechange} /><br />

        <label htmlFor="Projectprice">Project price:</label><br />
        <input type="text" id="Projectprice" name="Projectprice" value={inputs.Projectprice} placeholder='Project price' onChange={onhandlechange} /><br />

        <label htmlFor="Advancepay">Advance pay:</label><br />
        <input type="text" id="Advancepay" name="Advancepay" value={inputs.Advancepay} placeholder='Advance pay' onChange={onhandlechange} /><br />

        <label htmlFor="Remainingpay">Remaining pay:</label><br />
        <input type="text" id="Remainingpay" name="Remainingpay" value={inputs.Remainingpay} placeholder='Remaining pay' onChange={onhandlechange} /><br />

        <label htmlFor="date">Date:</label><br />
        <input type="date" id="date" name="date" value={inputs.date} placeholder='Date' onChange={onhandlechange} /><br />

        <label htmlFor="Address">Address:</label><br />
        <input type="text" id="Address" name="Address" value={inputs.Address} placeholder='Address' onChange={onhandlechange} /><br />

        <button className={Css.btn} type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ClientForm;
