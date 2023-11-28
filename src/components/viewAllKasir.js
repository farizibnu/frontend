// src/components/ViewAllKasir.js
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ViewAllKasir = () => {
  const [kasirData, setKasirData] = useState([]);

  useEffect(() => {
    // Fetch data kasir
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/kasir');
        setKasirData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'ID Kasir',
      dataIndex: 'id_kasir',
      key: 'id_kasir',
    },
    {
      title: 'Nama Kasir',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Nomor HP',
      dataIndex: 'hp',
      key: 'hp',
    },
  ];

  return (
    <div>
      <h2>View All Data Kasir</h2>
      <Table dataSource={kasirData} columns={columns} />
    </div>
  );
};

export default ViewAllKasir;
