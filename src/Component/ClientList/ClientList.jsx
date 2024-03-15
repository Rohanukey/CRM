import React, { useState, useEffect } from 'react';
import Css from "./ClientList.module.css";
import axios from 'axios';

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Clients/");

        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);


  return (
    <div className={Css.maincontainer}>
      <table className={Css.ClientList}>
        <div className={Css.clientlistWrapper}>

          <thead>
            <tr>
              <th className={Css.th}>No</th>
              <th>Name</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td className={Css.td}>{index + 1}</td>
                <td>{client.name}</td>
                <td>{client.contact}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default ClientList;
