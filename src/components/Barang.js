// components/Barang.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Barang = () => {
  const [barangList, setBarangList] = useState([]);

  useEffect(() => {
    axios.get('/api/barang')
      .then(response => setBarangList(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Kelola Data Barang</h2>
      <ul>
        {barangList.map(barang => (
          <li key={barang.id}>{barang.nama} - Rp {barang.harga}</li>
        ))}
      </ul>
    </div>
  );
};

export default Barang;
