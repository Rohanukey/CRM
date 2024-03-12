import React, { useState, useEffect } from 'react';
import Css from './ClientData.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ClientData({ onNavItemClick }) {
  const handleclick = (Component) => {
    onNavItemClick(Component);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [apidata, setApidata] = useState([]);
  const [newClientData, setNewClientData] = useState({
    name: '',
    email: '',
    contact: '',
    Projectname: '',
    Projectprice: '',
    Advancepay: '',
    Remainingpay: '',
    date: '',
    Address: ''
  });
  const url = "http://localhost:3000/Clients/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApidata(response.data);
      } catch (error) {
        console.error("Error getting client data", error);
      }
    };

    fetchData();
  }, []);

  const fetchClientData = () => {
    const storedData = localStorage.getItem('clientdata');
    if (storedData) {
      setClientData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  useEffect(() => {
    const filtered = apidata.filter((client) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      return (
        searchRegex.test(client.name) ||
        searchRegex.test(client.email) ||
        searchRegex.test(client.num)
      );
    });
    setFilteredData(filtered);
  }, [apidata, searchTerm]);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this client?");
    if (isConfirmed) {
      try {
        await axios.delete(url + id);
        const updatedData = apidata.filter(client => client.id !== id);
        setApidata(updatedData);
      } catch (error) {
        console.error("Error deleting client data", error);
      }
    }
  };

  const handleUpdate = (index) => {
    setEditingClient(index);
  };

  const handleSave = async (index) => {
    try {
      const response = await axios.put(url + filteredData[index].id, filteredData[index]);
      const updatedData = [...apidata];
      updatedData[index] = response.data;
      setApidata(updatedData);
      setEditingClient(null);
    } catch (error) {
      console.error("Error saving client data", error);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...filteredData];
    updatedData[index][name] = value;
    setFilteredData(updatedData);
  };

  return (
    <>
      <div className={Css.Employee}>
        <div className={Css.keys}>
          <button className={Css.addbtn} onClick={() => handleclick('ClientForm')}>Add  client</button>
          <input
            type="search" id="search" name="search" placeholder="search client" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Project Name</th>
              <th>Project Price</th>
              <th>Advance Pay</th>
              <th>Remaining Pay</th>
              <th>Date</th>
              <th>Address</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client, index) => (
              <tr key={index + 1} className={Css.tr}>
                <td>{index + 1}</td>
                <td>{editingClient === index ? <input id='1st' type="text" name="name" value={client.name} onChange={(e) => handleInputChange(e, index)} /> : client.name}</td>
                <td>{editingClient === index ? <input type="text" name="email" value={client.email} onChange={(e) => handleInputChange(e, index)} /> : client.email}</td>
                <td>{editingClient === index ? <input type="text" name="contact" value={client.contact} onChange={(e) => handleInputChange(e, index)} /> : client.contact}</td>
                <td>{editingClient === index ? <input type="text" name="Projectname" value={client.Projectname} onChange={(e) => handleInputChange(e, index)} /> : client.Projectname}</td>
                <td>{editingClient === index ? <input type="text" name="Projectprice" value={client.Projectprice} onChange={(e) => handleInputChange(e, index)} /> : client.Projectprice}</td>
                <td>{editingClient === index ? <input type="text" name="Advancepay" value={client.Advancepay} onChange={(e) => handleInputChange(e, index)} /> : client.Advancepay}</td>
                <td>{editingClient === index ? <input type="text" name="Remainingpay" value={client.Remainingpay} onChange={(e) => handleInputChange(e, index)} /> : client.Remainingpay}</td>
                <td>{editingClient === index ? <input type="text" name="date" value={client.date} onChange={(e) => handleInputChange(e, index)} /> : client.date}</td>
                <td>{editingClient === index ? <input type="text" name="Address" value={client.Address} onChange={(e) => handleInputChange(e, index)} /> : client.Address}</td>
                <td>
                  {editingClient === index ? (
                    <>
                      <button onClick={() => handleSave(index)}>Save</button>
                      <button onClick={() => setEditingClient(null)}>Cancel</button>
                    </>
                  ) : (
                    <button className={Css.del} onClick={() => handleUpdate(index)}>Update</button>
                  )}
                </td>
                <td>
                  <button className={Css.del} onClick={() => handleDelete(client.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  );
}

export default ClientData;
