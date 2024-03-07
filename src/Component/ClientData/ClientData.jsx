import React, { useState, useEffect } from 'react';
import Css from './ClientData.module.css';
import { Link } from 'react-router-dom';

function ClientData({onNavItemClick }) {
  const handleclick = (Component) => {
    onNavItemClick(Component);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editingClient, setEditingClient] = useState(null); // State to hold the client being edited
  const [editedClientData, setEditedClientData] = useState({}); // State to hold edited client data

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
    const filtered = clientData.filter((client) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      return (
        searchRegex.test(client.name) ||
        searchRegex.test(client.email) ||
        searchRegex.test(client.num)
      );
    });
    setFilteredData(filtered);
  }, [clientData, searchTerm]);

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this client?");
    if (isConfirmed) {
      const updatedData = [...clientData];
      updatedData.splice(index, 1);
      setClientData(updatedData);
      localStorage.setItem('clientdata', JSON.stringify(updatedData));
    }
  };

  const handleUpdate = (index) => {
    setEditingClient(index); // Set the client index being edited
    setEditedClientData(filteredData[index]); // Set the initial edited client data
  };

  const handleSave = () => {
    const updatedData = [...clientData];
    updatedData[editingClient] = editedClientData; // Update the client data
    setClientData(updatedData);
    localStorage.setItem('clientdata', JSON.stringify(updatedData));
    setEditingClient(null); // Reset editing state
    setEditedClientData({}); // Reset edited client data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedClientData({
      ...editedClientData,
      [name]: value
    });
  };

  return (
    <>
      <div className={Css.Employee}>
        <div className={Css.keys}>
          <button onClick={() => handleclick('ClientForm')}>Add + client</button>
          <label htmlFor="search">Search</label>
          <input
            type="search" id="search" name="search" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client, index) => (
              <tr key={index + 1} className={Css.tr}>
                <td>{index + 1}</td>
                <td>{editingClient === index ? <input id='1st' type="text" name="name" value={editedClientData.name} onChange={handleInputChange} /> : client.name}</td>
                <td>{editingClient === index ? <input type="text" name="email" value={editedClientData.email} onChange={handleInputChange} /> : client.email}</td>
                <td>{editingClient === index ? <input type="text" name="contact" value={editedClientData.contact} onChange={handleInputChange} /> : client.contact}</td>
                <td>{editingClient === index ? <input type="text" name="Projectname" value={editedClientData.Projectname} onChange={handleInputChange} /> : client.Projectname}</td>
                <td>{editingClient === index ? <input type="text" name="Projectprice" value={editedClientData.Projectprice} onChange={handleInputChange} /> : client.Projectprice}</td>
                <td>{editingClient === index ? <input type="text" name="Advancepay" value={editedClientData.Advancepay} onChange={handleInputChange} /> : client.Advancepay}</td>
                <td>{editingClient === index ? <input type="text" name="Remainingpay" value={editedClientData.Remainingpay} onChange={handleInputChange} /> : client.Remainingpay}</td>
                <td>{editingClient === index ? <input type="text" name="date" value={editedClientData.date} onChange={handleInputChange} /> : client.date}</td>
                <td>{editingClient === index ? <input type="text" name="Address" value={editedClientData.Address} onChange={handleInputChange} /> : client.Address}</td>
                <td>
                  {editingClient === index ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditingClient(null)}>Cancel</button>

                    </>
                  ) : (
                    <button onClick={() => handleUpdate(index)}>Update</button>
                  )}
                  <button onClick={() => handleDelete(index)}> Delete </button>
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
